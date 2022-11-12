import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationAdmin = (props) => {
    
    return (

        <div className="nav_bar_verticale">
            <img className="logo" srcSet="./LogoApp.svg"></img>
            <NavLink className="create_user" to="/Admin_create">
                <button id="bouton_créer" className="bouton" type="button" value="Créer un utilisateur" onClick={changeColor}>Créer utilisateur</button>
            </NavLink>
            <NavLink className="modify_user" to="/Admin_modif" state={{ iduser: props.iduser }}>
                <button id="bouton_modif" className="bouton" type="button" value="Modifier un utilisateur" onClick={changeColor}>Modifier utilisateur</button>
            </NavLink>
            <NavLink className="delete_user" to="/Admin_supp">
                <button id="bouton_sup" className="bouton" type="button" value="Supprimer un utilisateur" onClick={changeColor}>Supprimer utilisateur</button>
            </NavLink>
        </div>
    );
};


function changeColor() {
    let b1 = document.querySelector('button');
    b1.style.backgroundColor = "rgb(170,170,170)";
}

export default NavigationAdmin;