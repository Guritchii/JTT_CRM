import axios from 'axios'
import React, { useState, useEffect } from 'react';
import NavigationAdmin from '../components/NavigationAdmin.js';
import Admin from './Admin_create.js';
import { useLocation } from "react-router-dom";
import Select, { SelectChangeEvent } from '@mui/material/Select'; 
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { useNavigate } from "react-router-dom";
import Session from 'react-session-api';


const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

function RestartPassword() {
    const location = useLocation();

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confNewPassword, setConfNewPassword] = useState("");
    
    const navigate = useNavigate();

    function handleChangePassword(event){
        setPassword(event.target.value);
    };

    function handleChangeNewPassword(event){
        setNewPassword(event.target.value);
    };

    function handleChangeConfNewPassword(event){
        setConfNewPassword(event.target.value)
    };  

    function checkRestartPassword(event){

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());
        
        event.preventDefault();

        if(newPassword === confNewPassword)
        {
            const apiString = '/User/Auth/Password/' + Session.get("idUser") + "/" + CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
            api.get(apiString).then((response) => {
                const login = response.data;
                if (login.length > 0){
                    console.log(values.newPassword);

                    values.newPassword = CryptoJS.SHA256(newPassword).toString(CryptoJS.enc.Hex);

                    const apiStringUpdate = '/User/Update/Password/' + Session.get("idUser");
                    api.put(apiStringUpdate, values).then((response) => {
                        console.log(response.data);
                    });

                    navigate("/Parametres");
                }
                else{
                    console.log("trt");
                }
            });
        }
    }

    return (
        <div className="page_admin">
            <div className="Titre_Formulaire">
                <p className="Titre">Admin</p>
                <p className="Sous-titre">Modification d'utilisateur</p>
                <div className="Formulaire">
                    <form className="form" onSubmit={checkRestartPassword}>
                        <table className="Formulaire_de_connexion">
                            <tr>
                                <div className="texte_côté">
                                    <p>Mot de passe :</p>
                                    <p>Nouveau mot de passe :</p>
                                    <p>Confirmation nouveau mot de passe : </p>
                                </div>
                            </tr>
                            <tr>
                                <input id="MotDePasse" value={password} onChange={handleChangePassword} name='password' className="texte_zone" type="text" placeholder="Mot de passe..." required/>
                                <input id="NouvMotDePasse" value={newPassword} onChange={handleChangeNewPassword} name='newPassword' className="texte_zone" type="text" placeholder="Nouveau mot de passe..." required/>
                                <input id="ConfNouvMotDePasse" value={confNewPassword} onChange={handleChangeConfNewPassword} name='ConfNewPassword' className="texte_zone" type="text" placeholder="Confirmation nouveau mot de passe..." required/>
                            </tr>
                        </table>
                        <div className="bouton_submit">
                            <button className="bouton_val" type="submit">Valider</button>
                            <NavLink className="bouton_ann" to="/Parametres">Retour</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RestartPassword;