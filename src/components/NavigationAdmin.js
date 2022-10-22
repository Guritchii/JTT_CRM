import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationAdmin = () => {
    return (

        <div className="nav_bar_verticale">
            <img className="logo" srcSet="./LogoApp.svg"></img>
            <NavLink className="create_user" to="/Admin">
                <button id="user" className="bouton" type="button" value="Créer un utilisateur">Créer utilisateur</button>
            </NavLink>
            <NavLink className="modify_user" to="/Admin_modif">
                <button id="user" className="bouton" type="button" value="Modifier un utilisateur">Modifier utilisateur</button>
            </NavLink>
            <NavLink className="delete_user" to="/Admin_supp">
                <button id="user" className="bouton" type="button" value="Supprimer un utilisateur">Supprimer utilisateur</button>
            </NavLink>
        </div>

    );
};

export default NavigationAdmin;