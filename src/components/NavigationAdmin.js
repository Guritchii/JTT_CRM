import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationAdmin = () => {
    return (

        <div className="nav_bar_verticale">
            <img className="logo" srcSet="./LogoApp.svg"></img>
            <NavLink className="create_user" to="/Admin">
                <button id="user" className="bouton" type="button" value="Créer un utilisateur" onClick="Create_user()">Créer un nouvel utilisateur</button>
            </NavLink>
            <NavLink className="modify_user" to="/Admin_modif">
                <button id="user" className="bouton" type="button" value="Modifier un utilisateur" /*onClick="Modify_user()"*/>Modifier un utilisateur</button>
            </NavLink>
            <NavLink className="delete_user" to="/Admin_supp">
                <button id="user" className="bouton" type="button" value="Supprimer un utilisateur" /*onClick="Delete_user()"*/>Supprimer un utilisateur</button>
            </NavLink>
        </div>

    );
};

export default NavigationAdmin;