import React from 'react';
import NavigationDashboard from '../components/NavigationDashboard';


const Parametre = () => {
    return (
        <body>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            
            <div className="page_parametre">
                {/* Create an account page */}
                <div className="haut_de_page">
                    <h2 className="titre">Paramètre</h2>
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
                    <div className="Parametre">
                        <div className="one">
                            <div className="one_haut">
                                sécurité
                            </div>
                            <div className="one_milieu">
                                <p className="text_one_milieu">Signaler un problème</p>
                                <div className='bouton_submit'>
                                    <button className="bouton_signalerPB" type="submit">Signaler</button>
                                </div>
                            </div>
                            <div className="one_bas">
                                <p className="text_one_milieu">Mot de passe</p>
                                <div className='bouton_submit'>
                                    <button className="bouton_modifierMDP" type="submit">Modifier</button>
                                </div>
                            </div>
                        </div>
                        <div className="two">
                            <div className="two_haut">
                                coucou
                            </div>
                            <div className="two_bas">
                                <p className="text_two_bas">Mode sombre</p>
                                <div className="center">
                                    <input type="checkbox" name=""/>
                                </div>
                            </div>
                        </div>
                        <div className="three">
                            coucou
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Parametre;