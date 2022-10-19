import React from 'react';

const Admin_supp = () => {
    return (
        <div className="page_admin">
            {/* Create a page to delete an user in the admin page*/}
            <div className="nav_bar_verticale">
                <img className="logo" srcSet="./LogoApp.svg"></img>
                <div className="create_user">
                    <button id="user" className="bouton" type="button" value="Créer un utilisateur" onClick="Create_user()">Créer utilisateur</button>
                </div>
                <div className="modify_user">
                    <button id="user" className="bouton" type="button" value="Modifier un utilisateur" /*onClick="Modify_user()"*/>Modifier utilisateur</button>
                </div>
                <div className="delete_user">
                    <button id="user" className="bouton" type="button" value="Supprimer un utilisateur" /*onClick="Delete_user()"*/>Supprimer utilisateur</button>
                </div>
            </div>
            <p className="Titre">Admin
                <form className="formulaire">
                    <table className="Formulaire_de_recherche">
                        <tr>
                            <input id="personne" type="search" className="texte_barre" placeholder="🔎 Rechercher un utilisateur" /*onClick={tab}*//>
                        </tr>
                    </table>
                </form>
            </p>
        </div>
    );
};

/*function tab(){
    var tab = new Array();
    if(Create_user()){
        tab.push(nom, prenom);
    }
    console.log(tab);
}*/

export default Admin_supp;