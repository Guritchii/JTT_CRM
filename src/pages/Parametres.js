import React from 'react';
import NavigationDashboard from '../components/NavigationDashboard';


const Parametre = () => {
    return (
        <body>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            
            <div className="page_parametre">
                {/* Create an account page */}
                <div className="haut_de_page">
                    <h2 className="titre">Parametre</h2>
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
                        coucou
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Parametre;