import axios from 'axios'
import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import Admin from './Admin_create.js'
import Dashboard from './Dashboard.js'
import Dashboard from './Dashboard.js';
import Admin_list from './Admin_list.js';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })
  
function Connexion() {

    const [auth, setAuth] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [roleUser, setRole] = useState("");
    
    function changeLogin(event) {
        setLogin(event.target.value);
    }

    function changePassword(event) {
        setPassword(event.target.value);
    }
     
    function chechAuth(event) {
        
        // No refresh on Click
        event.preventDefault();
        
        if (login === "") {
            setAuth("Unknown");
            return;
        }

        if (password === "") {
            setAuth("Failed");
            return;
        }
        
        const apiString = '/User/Auth/' + login + "/" + CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
        api.get(apiString).then((response) => {
            const users = response.data;
            console.log(response.data.length);
            console.log(users.length);
            if (users.length > 0)
                if (users[0].result === 1)
                    setAuth("Succeed");
                else
                    setAuth("Failed");
            else
                setAuth("Unknown");
        });
    }

    if (auth === "Succeed") {
        const apiString = '/User/role/' + login;
        api.get(apiString).then((response) => {
            const role = response.data;
            console.log("Role: " + role[0].idRole);
            console.log("longueur role: " + role.length);
            if (role.length > 0){
                setRole(role[0].idRole);
                }
            else
                setRole(-1);
        });
        console.log("RoleUser: " + roleUser);
        if (roleUser === 4)
            return (<Admin_list />);
        else if (roleUser === 1)
            return (<Dashboard />);
    }
    else {
        return (
            <div className="page_connexion">
                <img className="logo" srcSet="./LogoApp.svg"></img>
                <form onSubmit={chechAuth} className="formulaire_de_connexion">
                    <label className="connexion_text">
                        Connexion
                    </label>
                    <label>
                        <input id="pseudo" className="text_zone" type="text" value={login} onChange={changeLogin} placeholder="Identifiant "/>
                    </label>
                    <label>
                        <input id="password" className="text_zone" type="password" value={password} onChange={changePassword} placeholder="Mot de passe"/>
                    </label>
                    <label className="envoyer">
                        <div className="memory_me">
                            <label htmlFor="checkbox">Se souvenir de moi</label>
                            <input type="checkbox" />
                        </div>
                        <button type="submit">Se connecter</button>
                    </label>
                    
                    <p>{auth === ""?'':auth === "Failed"?'Authentification Echoué':'Utilisateur inconnu'}</p>
                </form>
                <a className="forgot_pw" href="http://localhost">Mot de passe oublié ?</a>
            </div>
        );
    }
}

export default Connexion;