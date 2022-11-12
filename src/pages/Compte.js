import React from 'react';
import NavigationDashboard from '../components/NavigationDashboard';


const Compte = () => {
    return (
        <body>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            
            <div className="page_compte">
                {/* Create an account page */}
                <div className="haut_de_page">
                    <h2 className="titre">Mon Compte</h2>
                    <div className="rechLogo">
                        <div className="input_box">
                            <input type="search" placeholder="Rechercher..."/>
                            <span className="search">
                                <i class="uil uil-search search-icon"></i>
                            </span>
                        </div>
                        <img className="logo" srcSet="./LogoApp.svg"/>
                    </div>
                </div>
                <div className="bas_de_page">
                    <NavigationDashboard />                      
                    <div className="Compte">
                        <div className="name_picture">
                            <div className="picture">
                                <img className="photo_profil" srcSet="./logo_personEntouré.svg"/>
                                <div className='bouton_submit'>
                                    <button className="bouton_ajoutPhoto" type="submit">Ajouter une photo</button>
                                </div>
                            </div>
                            <div className="name">
                                <div className="presentationNom">
                                    <p className="def">Nom Complet :</p>
                                    <p className="nom">Mateo Centeno</p>
                                </div>
                                <div className='bouton_submit'>
                                    <button className="bouton_modifierNom" type="submit">Modifier</button>
                                </div>
                            </div>
                        </div>
                        <div className="infoPerso">
                            <p className="description">Informations personnel</p>
                            <div className="parti_mail">   
                                <p className="def">Mail :</p>
                                <p className="mail">coucou@gmail.com</p>
                            </div>
                            <div className="parti_pays">                                
                                <p className="def">Pays ou Région :</p>
                                <p className="pays_region">France</p>
                            </div>
                            <div className="parti_tel">                       
                                <p className="def">Tel :</p>
                                <p className="tel">0745632114</p>
                            </div>
                        </div>
                        <div className="infoEntreprise">
                            <p className="description">Informations entreprise</p>
                            <div className="parti_name">   
                                <p className="def">Nom de l'entreprise</p>
                                <p className="name">entreprise name</p>
                            </div>
                            <div className="parti_secteurAct">                                
                                <p className="def">Secteur d'activité :</p>
                                <p className="secteurAct">Coiffure</p>
                            </div>
                            <div className="parti_nbClient">                       
                                <p className="def">Nombre clients :</p>
                                <p className="nbClient">200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Compte;