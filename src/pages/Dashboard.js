import React, { useState, useEffect } from 'react';
import NavigationDashboard from '../components/NavigationDashboard';
import Session from 'react-session-api';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

function Dashboard() {

    const [infoContactRecent, setInfoContactRecent] = useState([]);
    const [dataKey, setDataKey] = useState([]);
    const [infoBestCustomer, setinfoBestCustomer] = useState([]);

    const [theme, setTheme] = useState("light");
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }

    useEffect(() => {

        const date = new Date();
        date.setMonth(date.getMonth() - 1);

        const year = date.getFullYear();
        const month = (date.getMonth() + 1);

        const apiString = '/Contact/LastAdd3/' + Session.get("idUser");
        api.get(apiString).then((response) => {
            if (response.data.length > 0)
                setInfoContactRecent(response.data);
        });

        const apiStringKey = '/Sale/KeyNumber/' + Session.get("idUser") + "/" + month + "/" + year;
        api.get(apiStringKey).then((response) => {
            if (response.data.length > 0)
                setDataKey(response.data[0]);
        }); 

        const apiStringBestCustomer = '/Sale/BestCustomer/' + Session.get("idUser");
        api.get(apiStringBestCustomer).then((response) => {
            if (response.data.length > 0)
                setinfoBestCustomer(response.data[0]);
            else
                setinfoBestCustomer({name :"Aucun client",total: "0"});
        });
    }, []);

    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className="page_dashboard">
                {/* Create an account page */}
                <div className="haut_de_page">
                    <h2 className="titre">Dashboard</h2>
                    <div className="rechLogo">
                        <img className="logo" srcSet={theme === "light" ? './LogoApp.svg' : './LogoApp_light.svg'} />
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
                                <div className="Mes_prochaines_activit??s">
                                    Mes prochaines activit??s
                                </div>
                                <div className="Chiffre_cl??s">
                                    <div className="Ch_Cl??_gauche">
                                        <div className="Ch_Cl??_gauche_haut">
                                            Chiffre_cl??s
                                            <div>{dataKey.total}</div>
                                        </div>
                                        <div className="Ch_Cl??_gauche_bas">
                                            Chiffre_cl??s
                                            <div>{dataKey.totalcontact}</div>
                                        </div>
                                    </div>
                                    <div className="Ch_Cl??_droite">
                                        <div className="Ch_Cl??_droite_haut">
                                            Chiffre_cl??s
                                            <div>{infoBestCustomer.name + " : " + infoBestCustomer.total}</div>
                                        </div>
                                        <div className="Ch_Cl??_droite_bas">
                                            Chiffre_cl??s
                                            <div>{new Date().getFullYear() + " : " + (new Date().getMonth() + 1)}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="_droite">
                            <div className="clients_important">
                                clients important
                            </div>
                            <div className="contacts_ajout??_r??cemment">
                                contacts ajout?? r??cemment
                                {infoContactRecent.map(info => (
                                    <div>{info.firstname + " " + info.lastname}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Dashboard;