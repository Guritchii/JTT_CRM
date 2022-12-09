import axios from 'axios'
import React, { useState, useEffect } from 'react';
import NavigationAdmin from '../components/NavigationAdmin.js';
import Admin from './Admin_create.js';
import { useLocation } from "react-router-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

function Admin_modif() {
    const location = useLocation();
    const { iduser } = location.state;

    const [roles, setRoles] = useState([]);
    const [selectedIdRole, setSelectedIdRole] = useState(1);
    
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [phone, setPhone] = useState();
    const [mail, setMail] = useState();
    const [login, setLogin] = useState();

    const navigate = useNavigate();

    useEffect(() =>{
        api.get('/Role/All/').then((response) => {
            setRoles(response.data);
        });
    }, []);

    useEffect(() =>{
        const apiString = '/User/Id/' + iduser;
        api.get(apiString).then((response) => {
            console.log(response.data[0]);
            setSelectedIdRole(response.data[0].idrole);

            setLastName(response.data[0].lastname);
            setFirstName(response.data[0].firstname);
            setLogin(response.data[0].login);
            setPhone(response.data[0].phone);
            setMail(response.data[0].mail);
        });
    }, []);

    function handleChangeRole(event){
        console.log(event.target.value);
        setSelectedIdRole(event.target.value);
    };

    function handleChangeLastName(event){
        setLastName(event.target.value);
    };

    function handleChangeFirstName(event){
        setFirstName(event.target.value);
    };

    function handleChangePhone(event){
        setPhone(event.target.value);
    };

    function handleChangeMail(event){
        setMail(event.target.value);
    };

    function handleChangeLogin(event){
        setLogin(event.target.value);
    };

    function checkModif(event){
        
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());
        console.log(values.firstname);

        const apiString = '/User/Update/' + iduser;
        api.put(apiString, values).then((response) => {
            console.log(response.data);
        });

        navigate("/Admin_list");
    }

    return (
        <div className="page_admin">
            <div className="Titre_Formulaire">
                <p className="Titre">Admin</p>
                <p className="Sous-titre">Modification d'utilisateur</p>
                <div className="Formulaire">
                    <form className="form" onSubmit={checkModif}>
                        <table className="Formulaire_de_connexion">
                            <tr className="one">
                                <div className="texte_côté">
                                    <div>Nom :</div>
                                    <p>Prénom :</p>
                                    <p>Login :</p>
                                    <p>Rôle :</p>
                                    <p>Téléphone :</p>
                                    <p>Mail :</p>
                                </div>
                            </tr>
                            <tr className="two">
                                <input id="nom" value={lastName} onChange={handleChangeLastName} name="lastname" className="texte_zone" type="text" placeholder="Nom..." required/>
                                <input id="prenom" value={firstName} onChange={handleChangeFirstName} name="firstname" className="texte_zone" type="text" placeholder="Prénom..." required/>
                                <input id="identifiant" value={login} onChange={handleChangeLogin} name="login" className="texte_zone" type="text" placeholder="Identifiant..." required/>
                                <Select
                                    name="idrole"
                                    value={selectedIdRole}
                                    onChange={handleChangeRole}
                                >
                                    {roles.map(role => (
                                        <MenuItem value={role.idRole}>{role.name}</MenuItem>    
                                    ))}
                                </Select>
                                <input id="phone" value={phone} onChange={handleChangePhone} name="phone" className="texte_zone" type="tel" 
                                    placeholder="Téléphone..." pattern="[0-9]{10}" required/>
                                <input id="email" value={mail} onChange={handleChangeMail} name="mail" className="texte_zone" type="email" placeholder="Email..." required/>
                                <input id="identifiant" value={login} onChange={handleChangeLogin} name="login" className="texte_zone" type="text" placeholder="Identifiant..." required/>
                            </tr>
                            <tr className="three">
                                <NavLink className="button_submit" to="/RestartPassword" state={{ iduser:iduser }}>Réinitialiser mot de passe</NavLink>
                            </tr>
                        </table>
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