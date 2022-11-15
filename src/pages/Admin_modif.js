import axios from 'axios'
import React, { useState, useEffect } from 'react';
import NavigationAdmin from '../components/NavigationAdmin.js';
import Admin from './Admin_create.js';
import { useLocation } from "react-router-dom"
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

function Admin_modif() {
    const location = useLocation();
    const { iduser } = location.state;

    const [currentUser, setCurrentUser] = useState([]);
    const [roles, setRoles] = useState([]);
    const [selectedIdRole, setSelectedIdRole] = useState(1);

    useEffect(() =>{
        const apiString = '/User/Id/' + iduser;
        api.get(apiString).then((response) => {
            setCurrentUser(response.data[0]);
            setSelectedIdRole(response.data[0].idrole);
        });
    });

    useEffect(() =>{
        api.get('/Role/All/').then((response) => {
            setRoles(response.data);
        });
    }, []);

    function handleChangeRole(event){
        setSelectedIdRole(event.target.value);
    };

    function checkModif(event){
        
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());
        console.log(values.firstname);

        const apiString = '/User/Update/' + currentUser.iduser;
        api.post(apiString).then (function(response) {
                    console.log(response.data);
        });

    }

    return (
        <div className="page_admin">
            <NavigationAdmin />
            {/* Create a admin page */}
            <div className="Titre_Formulaire">
                <p className="Titre">Admin</p>
                <p className="Sous-titre">Modification d'utilisateur</p>
                <div className="Formulaire">
                    <form className="form" onSubmit={checkModif}>
                        <table className="Formulaire_de_connexion">
                            <tr>
                                <div className="texte_côté">
                                    <p>Nom :</p>
                                    <p>Prénom :</p>
                                    <p>Rôle :</p>
                                    <p>Identifiant :</p>
                                    <p>Identifiant :</p>
                                    <p>Mot de passe :</p>
                                </div>
                            </tr>
                            <tr>
                                <input id="nom" value={currentUser.lastname} name='lastname' className="texte_zone" type="text" placeholder="Nom..." required/>
                                <input id="prenom" value={currentUser.firstname} name="firstname" className="texte_zone" type="text" placeholder="Prénom..." required/>
                                <Select
                                    name='idrole'
                                    value={selectedIdRole}
                                    onChange={handleChangeRole}
                                >
                                    {roles.map(role => (
                                        <MenuItem value={role.idRole}>{role.name}</MenuItem>    
                                    ))}
                                </Select>
                                <input id="phone" value={currentUser.phone} name="phone" className="texte_zone" type="tel" 
                                    placeholder="Téléphone..." pattern="[0-9]{10}" required/>
                                <input id="email" value={currentUser.mail} name="mail" className="texte_zone" type="email" placeholder="Email..." required/>
                                <input id="identifiant" value={currentUser.login} name="login" className="texte_zone" type="text" placeholder="Identifiant..." required/>
                            </tr>
                            <tr>
                                <div className="button_submit">
                                    <button className="bouton_réini">Réinitialiser le mot de passe</button>
                                </div>
                            </tr>
                        </table>
                        <p>{currentUser === true?"L'identifiant existe déja":''}</p>
                        <div className="bouton_submit">
                            <button className="bouton_val" type="submit">Valider</button>
                            <NavLink className="bouton_ann" to="/Admin_list">Retour</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin_modif;