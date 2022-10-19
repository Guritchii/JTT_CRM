import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationAdmin = () => {
    return (

        <div className="nav_bar_verticale">
            <img className="logo" srcSet="./LogoApp.svg"></img>
            <div className="create_user">
                <button id="user" className="bouton" type="button" value="Créer un utilisateur" onClick="Create_user()">Créer un nouvel utilisateur</button>
            </div>
            <div className="modify_user">
                <button id="user" className="bouton" type="button" value="Modifier un utilisateur" /*onClick="Modify_user()"*/>Modifier un utilisateur</button>
            </div>
            <div className="delete_user">
                <button id="user" className="bouton" type="button" value="Supprimer un utilisateur" /*onClick="Delete_user()"*/>Supprimer un utilisateur</button>
            </div>
        </div>

    );
};

export default NavigationAdmin;