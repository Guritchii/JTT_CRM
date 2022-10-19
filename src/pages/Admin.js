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
                                <p className="texte">Nom :</p>
                                <input id="nom" className="texte_zone" type="text" placeholder="Nom..."/>
                            </tr>
                            <tr>
                                <p className="texte">Prénom :</p>
                                <input id="prénom" className="texte_zone" type="text" placeholder="Prénom..."/>
                            </tr>
                            <tr>
                                <p className="texte">Rôle dans l'entreprise :</p>
                                <input id="rôle" className="texte_zone" type="text" placeholder="Rôle..."/>
                            </tr>
                            <tr>
                                <p className="texte">Identifiant :</p>
                                <input id="identifiant" className="texte_zone" type="text" placeholder="Identifiant..."/>
                            </tr>
                            <tr>
                                <p className="texte">Mot de passe (par défaut) :</p>
                                <input id="password" className="texte_zone" type="password" placeholder="Mot de passe (par default)..."/>
                            </tr>
                            <tr>
                                <div className='bouton_submit'>
                                    <button className="bouton_val" type="submit">Valider</button>
                                    <button className="bouton_ann" type="submit">Annuler</button>
                                </div>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
};

function Create_user() {
    document.getElementById("user").onclick = function() {Create_user()};
    document.location.href = "http://localhost:3000/";
}

function Modify_user(){
    document.getElementById("user").onclick = function() {Modify_user()};
    document.location.href = "http://localhost:3000/";
}

/*function Delete_user(){
    //document.getElementById("user").onclick = function() {Delete_user()};
    document.location = './pages/Admin_supp';
    console.log(document.location);
}*/

export default Admin;