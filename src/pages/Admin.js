import React from 'react';
import NavigationAdmin from '../components/NavigationAdmin.js';


const Admin = () => {
    return (
        <div className="page_admin">
            <NavigationAdmin />
            {/* Create a admin page */}
            <div className="Titre_Formulaire">
                <p className="Titre">Admin</p>
                <div className="Formulaire">
                    <form className="form">
                        <table className="Formulaire_de_connexion">
                            <tr>
                                <div className="texte_côté">
                                    <p>Nom :</p>
                                    <p>Prénom :</p>
                                    <p>Rôle :</p>
                                    <p>Identifiant :</p>
                                    <p>Mot de passe :</p>
                                </div>
                            </tr>
                            <tr>
                                <input id="nom" className="texte_zone" type="text" placeholder="Nom..."/>
                                <input id="prénom" className="texte_zone" type="text" placeholder="Prénom..."/>
                                <input id="rôle" className="texte_zone" type="text" placeholder="Rôle..."/>
                                <input id="identifiant" className="texte_zone" type="text" placeholder="Identifiant..."/>
                                <input id="password" className="texte_zone" type="password" placeholder="Mot de passe (par default)..."/>
                            </tr>
                        </table>
                    </form>
                </div>
                <tr className="bouton_submit">
                    <button className="bouton_val" type="submit">Valider</button>
                    <button className="bouton_ann" type="submit">Annuler</button>
                </tr>
            </div>
        </div>
    );
};

export default Admin;