import React from 'react';


const Admin = () => {
    return (
        <div className="page_admin">
            {/* Create a admin page */}
            <div className="nav_bar_verticale">
                <img className="logo" srcSet="./LogoApp.svg"></img>
                <div className="create_user">
                    <button id="user" className="bouton" type="button" value="Créer un utilisateur" /*onClick="Create_user()"*/>Créer un nouvel utilisateur</button>
                </div>
                <div className="modify_user">
                    <button id="user" className="bouton" type="button" value="Modifier un utilisateur" /*onClick="Modify_user()"*/>Modifier un utilisateur</button>
                </div>
                <div className="delete_user">
                    <button id="user" className="bouton" type="button" value="Supprimer un utilisateur" /*onClick="Delete_user()"*/>Supprimer un utilisateur</button>
                </div>
            </div>
            <div className="Formulaire">
                <p className="Titre">Admin</p>
                <form className="form">
                    <table className="Formulaire_de_connexion">
                        <tr>
                            <p className="texte">Nom :</p>
                            <input id="nom" className="texte_zone" type="text"/>
                        </tr>
                        <tr>
                            <p className="texte">Prénom :</p>
                            <input id="prénom" className="texte_zone" type="text"/>
                        </tr>
                        <tr>
                            <p className="texte">Rôle dans l'entreprise :</p>
                            <input id="rôle" className="texte_zone" type="text"/>
                        </tr>
                        <tr>
                            <p className="texte">Identifiant :</p>
                            <input id="identifiant" className="texte_zone" type="text"/>
                        </tr>
                        <tr>
                            <p className="texte">Mot de passe (par défaut) :</p>
                            <input id="password" className="texte_zone" type="text"/>
                        </tr>
                        <tr>
                            <button className="bouton_val_ann" type="submit">Valider</button>
                            <button className="bouton_val_ann" type="submit">Annuler</button>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default Admin;