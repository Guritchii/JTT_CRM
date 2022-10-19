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
                            <input type="text" placeholder="Rechercher..."/>
                            <span className="search">
                                <i class="uil uil-search search-icon"></i>
                            </span>
                        </div>
                        <img className="logo" srcSet="./LogoApp.svg"/>
                    </div>
                </div>
                <div className="bas_de_page">
                    <div className="nav_bar_verticale">
                        <img className="logo" srcSet="./logo_person.png"/>
                        <img className="logo" srcSet="./logo_stats.png"/>                        
                        <img className="logo" srcSet="./logo_graphique.png"/>                                            
                        <img className="logo" srcSet="./logo_calendrier.png"/>
                        <img className="logo" srcSet="./logo_groupe.png"/>
                        <img className="logo" srcSet="./logo_parametre.png"/>
                    </div>
                    <div className="Compte">
                        <p>Compte</p>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Compte;