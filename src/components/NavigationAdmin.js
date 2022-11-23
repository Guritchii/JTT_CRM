import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationAdmin = (props) => {
    
    return (

        <div className="nav_bar_verticale">
            <div className="logoCRM">
                <img className="logo" srcSet="./LogoApp.svg"></img>
            </div>
            <div className="BoutonNav">
                <NavLink className="create_user" to="/Admin_create">
                    <button id="bouton_créer" className="bouton" type="button" value="Créer un utilisateur">Créer utilisateur</button>
                </NavLink>
                <NavLink className="modify_user" to="/Admin_modif" state={{ iduser: props.iduser }}>
                    <button id="bouton_modif" className="bouton" type="button" value="Modifier un utilisateur">Modifier utilisateur</button>
                </NavLink>
                <NavLink className="delete_user" to="/Admin_supp">
                    <button id="bouton_sup" className="bouton" type="button" value="Supprimer un utilisateur">Supprimer utilisateur</button>
                </NavLink>
                <NavLink className="list_devis" to="/Admin_devis">
                    <button id="bouton_devis" className="bouton" type="button" value="Devis">Devis</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NavigationAdmin;