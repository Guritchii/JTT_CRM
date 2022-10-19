import React from 'react';
import NavigationAdmin from '../components/NavigationAdmin.js';

const Admin_supp = () => {
    return (
        <div className="page_admin">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            {/* Create a page to delete an user in the admin page*/}
            <NavigationAdmin />
            <div className="Titre_Formulaire_Rech">
                <p className="Titre">Admin</p>
                <div className="rechLogo">
                    <div className="input_box">
                    <input type="search" placeholder="Rechercher..."/>
                        <span className="search">
                            <i class="uil uil-search search-icon"></i>
                        </span>
                    </div>
                    <form className="formulaire">
                        <table className="Formulaire_de_recherche">
                            <tr className="tr_bouton">
                                <div className="bouton_personnes">
                                    <p className="bouton_personne1">
                                        <strong>Dupont Jacques</strong>
                                    </p>
                                    <p className="bouton_personne2">
                                        <strong>Carreau Alexis</strong>
                                    </p>
                                </div>
                            </tr>
                            <tr>
                                <div id="style" className='bouton_submit'>
                                    <button className="bouton_sup" type="submit" onClick="document.getElementById('style').style.backgroundColor='green'">Supprimer</button>
                                    <button className="bouton_ann" type="submit" onClick="document.getElementById('style').style.backgroundColor='red'">Annuler</button>
                                </div>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>
         </div>
    );
};


export default Admin_supp;