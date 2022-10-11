import React from 'react';


const Connexion = () => {
    return (
        <div>
            {/* Create a connexion page */}
            <img src="./LogoApp.png"></img>
            <div>
                <form action="">
                    <input type="text" placeholder="Pseudo" />
                    <input type="password" placeholder="Mot de passe" />
                    <button type="submit">Se connecter</button>
                    <input type="checkbox"/>
                    <label htmlFor="checkbox">Se souvenir de moi</label>
                </form>
            </div>
            <a href="http://localhost">Mot de passe oublié ?</a>
        </div>
    );
};

export default Connexion;