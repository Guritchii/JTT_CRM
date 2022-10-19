import React from 'react';
import NavigationAdmin from '../components/NavigationAdmin.js';

const Admin_modif = () => {
    return (
        <div className="page_admin">
            {/* Create a page to delete an user in the admin page*/}
            <NavigationAdmin/>
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

export default Admin_modif;