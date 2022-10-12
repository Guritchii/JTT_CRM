import React from 'react';


const Connexion = () => {
    return (
        <div className="page_connexion">
            {/* Create a connexion page */}
            <img className="logo" srcSet="./LogoApp.svg"></img>
            <form action="">
                <table className="formulaire_de_connexion">
                    <tr className="connexion_text">
                        Connexion
                    </tr>
                    <tr>
                        <input className="text_zone" type="text" placeholder="Pseudo" />
                    </tr>
                    <tr>
                        <input className="text_zone" type="password" placeholder="Mot de passe" />
                    </tr>
                    <tr className="envoyer">
                        <div className="memory_me">
                            <label htmlFor="checkbox">Se souvenir de moi</label>
                            <input type="checkbox" />
                        </div>
                        <button type="submit">Se connecter</button>
                    </tr>
                </table>
            </form>
            <a className="forgot_pw" href="http://localhost">Mot de passe oublié ?</a>
        </div>
    );
};

export default Connexion;