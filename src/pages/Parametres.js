import React, { useState } from 'react';
import NavigationDashboard from '../components/NavigationDashboard';
import { NavLink } from 'react-router-dom';

const Parametre = () => {
    const [theme, setTheme] = useState("light");    
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }

    
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        localStorage.setItem("theme", (theme === "light" ? "dark" : "light"))
    }
    
    
    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            
            <div className="page_parametre">
                <div className="haut_de_page">
                    <h2 className="titre">Paramètres</h2>
                    <div className="rechLogo">
                        <img className="logo" srcSet="./LogoApp.svg"/>
                    </div>
                </div>
                <div className="bas_de_page">
                    <NavigationDashboard />                      
                    <div className="Parametre">
                        <div className="one">
                            <div className="one_haut">
                                <p className="text_one_haut">Sécurité</p>
                            </div>
                            <div className="one_milieu">
                                <p className="text_one_milieu">Signaler un problème</p>
                                <div className='bouton_submit'>
                                    <button className="bouton_signalerPB" type="submit">Signaler</button>
                                </div>
                            </div>
                            <div className="one_bas">
                                <p className="text_one_milieu">Mot de passe</p>
                                <NavLink className="bouton_submit" to="/RestartPassword">
                                    <button className="bouton_modifierMDP" type="submit">Modifier</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="two">
                            <div className="two_haut">
                                <p className="text_two_haut">Général</p>
                            </div>
                            <div className="two_bas">
                                <p className="text_two_bas">Mode sombre</p>
                                <div className="center">
                                    <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"}/>
                                </div>
                            </div>
                        </div>
                        <div className="three">
                            <p className="text_three_haut">Autre</p>
                            <div className="déconnexion">
                                <p className="text_three">Déconnexion</p>
                                <NavLink to="/">
                                    <button id="bouton_deco" className="bouton" type="button" value="Déco">Se déconnecter</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Parametre;