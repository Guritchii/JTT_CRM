import React from 'react';


const Compte = () => {
    return (
        <body>
            <div className="page_compte">
                {/* Create an account page */}
                <div className="haut_de_page">
                    <h2 className="titre">Mon Compte</h2>
                    <div className="rechLogo">
                        <input type="search" className="search" value=""/>
                        <img className="logo" srcSet="./LogoApp.svg"></img>
                    </div>
                </div>
                <div className="bas_de_page">
                    <div className="nav_bar_verticale">
                        <p>nav-bar</p>
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