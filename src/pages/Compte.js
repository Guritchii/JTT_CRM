import React from 'react';


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
                    <div className="nav_bar_verticale">
                        <div className="parti_one">
                            <button className="button" type="submit">
                                <img className="logo_nav_bar" srcSet="./logo_person.svg"/>                        
                            </button>
                        </div>  
                        <div className="parti_two">
                            <button className="button" type="submit">
                                <img className="logo_nav_bar" srcSet="./logo_speed.svg"/> 
                            </button>
                            <button className="button" type="submit">
                                <img className="logo_nav_bar" srcSet="./logo_graph.svg"/>
                            </button>
                            <button className="button" type="submit">
                                <img className="logo_nav_bar" srcSet="./logo_calendrier.svg"/>
                            </button>
                        </div>
                        <div className="parti_three">
                            <button className="button" type="submit">
                                <img className="logo_nav_bar" srcSet="./logo_group.svg"/>
                            </button>
                        </div>   
                        <div className="parti_four">
                            <button className="button" type="submit">
                                <img className="logo_nav_bar" srcSet="./logo_parametre.svg"/>
                            </button>
                        </div>                                    
                    </div>
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
                                    <button className="bouton_modifierNom" type="submit">Modifier le nom</button>
                                </div>
                            </div>
                        </div>
                        <div className="infoPerso">
                            <p>infoPerso</p>
                        </div>
                        <div className="infoEntreprise">
                            <p>infoEntreprise</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Compte;