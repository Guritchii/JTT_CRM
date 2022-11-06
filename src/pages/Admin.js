import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavigationAdmin from '../components/NavigationAdmin.js';
import CryptoJS from 'crypto-js';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

function Admin() {

    const [loginError, setLoginError] = useState(false);    
    const [roles, setRoles] = useState([]);
    const [selectedIdRole, setSelectedIdRole] = useState(1);
 
    useEffect(() =>{
        api.get('/Role/All/').then((response) => {
            setRoles(response.data);
        });
    }, []);

    function handleChangeRole(event){
        setSelectedIdRole(event.target.value);
    };

    function checkAdd(event){
        
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());
         {/* Verif value login exist déja */}
        console.log(values.firstname);
        api.get('/User/Exist/'+ values.login).then((response) => {
            const login = response.data;
            if (login.length > 0){
                setLoginError(true);
            }
            else {
                setLoginError(false);
                values.password = CryptoJS.SHA256(values.password).toString(CryptoJS.enc.Hex);

                api.post('/User/Add', values).then (function(response) {
                    console.log(response.data);
                });
            }
        });
    };

    return (
        <div className="page_admin">
            <NavigationAdmin />
            {/* Create a admin page */}
            <div className="Titre_Formulaire">
                <p className="Titre">Admin</p>
                <div className="Formulaire">
                    <form className="form" onSubmit={checkAdd}>
                        <table className="Formulaire_de_connexion">
                            <tr>
                                <div className="texte_côté">
                                    <p>Nom :</p>
                                    <p>Prénom :</p>
                                    <p>Téléphone :</p>
                                    <p>Email :</p>
                                    <p>Rôle :</p>
                                    <p>Identifiant :</p>
                                    <p>Mot de passe :</p>
                                </div>
                            </tr>
                            <tr>
                                <input id="nom" name='lastname' className="texte_zone" type="text" placeholder="Nom..." required/>
                                <input id="prenom" name='firstname' className="texte_zone" type="text" placeholder="Prénom..." required/>
                                <input id="phone" name='phone' className="texte_zone" type="tel" 
                                    placeholder="Téléphone..." pattern="[0-9]{10}" required/>
                                <input id="email" name='mail' className="texte_zone" type="email" placeholder="Email..." required/>
                                <Select
                                    name='idrole'
                                    value={selectedIdRole}
                                    onChange={handleChangeRole}
                                >
                                    {roles.map(role => (
                                        <MenuItem value={role.idRole}>{role.name}</MenuItem>    
                                    ))}
                                </Select>
                                <input id="identifiant" name='login' className="texte_zone" type="text" placeholder="Identifiant..." required/>
                                <input id="password" name='password' className="texte_zone" type="password" placeholder="Mot de passe..." required/>
                            </tr>
                        </table>
                        <p>{loginError === true?"L'identifiant existe déja":''}</p>
                        <div className="bouton_submit">
                            <button className="bouton_val" type="submit">Valider</button>
                            <button className="bouton_ann" type='reset'>Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;