import React, {useState} from 'react';
import NavigationDashboard from '../components/NavigationDashboard';

const Dashboard = () => {
    const [theme, setTheme] = useState("light");    
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }

    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            
            <div className="page_dashboard">
                {/* Create an account page */}
                <div className="haut_de_page">
                    <h2 className="titre">Dashboard</h2>
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
                    <div className="Dashboard">
                        <div className="_gauche">
                            <div className="_haut">
                                <div className="Mes_infos">
                                    Mes infos
                                </div>
                                <div className="Alertes">
                                    Alertes
                                </div>
                            </div>
                            <div className="_bas">
                                <div className="Mes_prochaines_activités">
                                    Mes prochaines activités
                                </div>
                                <div className="Chiffre_clés">
                                    <div className="Ch_Clé_gauche">
                                        <div className="Ch_Clé_gauche_haut">
                                            Chiffre_clés
                                        </div>
                                        <div className="Ch_Clé_gauche_bas">
                                            Chiffre_clés
                                        </div>
                                    </div>
                                    <div className="Ch_Clé_droite">
                                        <div className="Ch_Clé_droite_haut">
                                            Chiffre_clés
                                        </div>
                                        <div className="Ch_Clé_droite_bas">
                                            Chiffre_clés
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_droite">
                            <div className="clients_important">
                                clients important
                            </div>
                            <div className="contacts_ajouté_récemment">
                                contacts ajouté récemment
                            </div>
                        </div>
                    </div>             
                </div>
            </div>
        </body>
    );
};

export default Dashboard;