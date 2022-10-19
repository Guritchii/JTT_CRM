import axios from 'axios'
import React, { useState } from 'react';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })
  
function Connexion() {

    const [auth, setAuth] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    
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
        const apiString = '/User/Auth/' + login + "/" + password;
        api.get(apiString).then((response) => {
            const users = response.data;
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
        return(
            <div>My CRM</div>
        );
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
                        <input id="pseudo" className="text_zone" type="text" value={login} onChange={changeLogin} placeholder="Pseudo"/>
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
                    <p>{auth === ""?'':auth === "Failed"?'Authentification Failed':'User Unknown'}</p>
                </form>
                <a className="forgot_pw" href="http://localhost">Mot de passe oublié ?</a>
            </div>
        );
    }
}

export default Connexion;