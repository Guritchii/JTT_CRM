import React from 'react';
import axios from 'axios'
import NavigationAdmin from '../components/NavigationAdmin.js';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

function Admin() {

    function checkAdd(event){
        
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());

        console.log(values.firstname);

        

        api.post('/User/Add', values).then (function(response) {
        console.log(response.data);
        });
    };

    return (
        <div className="page_admin">
            <NavigationAdmin />
            {/* Create a admin page */}
            <div className="Titre_Formulaire">
                <p className="Titre">Admin</p>
                <div className="Formulaire">
                    <form className="form" onSubmit={checkAdd}>
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
                                <input id="nom" name='lastname' className="texte_zone" type="text" placeholder="Nom..."/>
                                <input id="prénom" name='firstname' className="texte_zone" type="text" placeholder="Prénom..."/>
                                <input id="rôle" name='idrole' className="texte_zone" type="text" placeholder="Rôle..."/>
                                <input id="identifiant" name='login' className="texte_zone" type="text" placeholder="Identifiant..."/>
                                <input id="password" name='password' className="texte_zone" type="password" placeholder="Mot de passe (par default)..."/>
                            </tr>
                        </table>
                        <div className="bouton_submit">
                            <button className="bouton_val" type="submit">Valider</button>
                            <button className="bouton_ann" type='reset'>Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;