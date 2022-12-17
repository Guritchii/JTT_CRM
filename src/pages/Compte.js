import { Component } from '@fullcalendar/core';
import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import NavigationDashboard from '../components/NavigationDashboard';
import img1 from '../img/logo_personEntouré.svg';
import axios from 'axios'
import Session from 'react-session-api';

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

function Compte() {
    const [theme, setTheme] = useState("light");
    const [modification, setModification] = useState(false);
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const modificationHandler = () => {
        setModification((modification) => !modification)
        console.log(modification)
    }

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");

    useEffect(() =>{
        const apiString = '/User/Id/' + Session.get("idUser");
        api.get(apiString).then((response) => {
            setLastName(response.data[0].lastname);
            setFirstName(response.data[0].firstname);
            setPhone(response.data[0].phone);
            setMail(response.data[0].mail);
        });
    }, []);

    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className="page_compte">
                {/* Create an account page */}
                <div className="haut_de_page">
                    <h2 className="titre">Mon Compte</h2>
                    <div className="rechLogo">
                        <img className="logo" srcSet={theme === "light" ? './LogoApp.svg' : './LogoApp_light.svg'}/>
                    </div>
                </div>
                <div className="bas_de_page">
                    <NavigationDashboard />
                    <div className="Compte">
                        <div className="name_picture">
                            <div className="picture">
                                <div id="display_image">
                                    <img src={img1} srcSet={file} id="img" className="img"></img>
                                </div>
                                <div className='bouton_submit'>
                                    <input type="file" name="fileUpload" id="input" class="bouton_ajoutPhoto" accept="image/" onChange={handleChange} />
                                    <div className="label">
                                        <label className="fileUpload" htmlFor="input">
                                            Ajoutez votre photo
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="name">
                                <div className="presentationNom">
                                    <p id="texte" className="def">Nom Complet :</p>
                                    <p>{}</p>
                                    <input id="texte" value={firstName +" "+ lastName} name="texte" className="texte" type="text" disabled/>
                                </div>
                                <div className='bouton_submit'>
                                    <button id="bouton" className="bouton_modifierNom" type="submit" onClick={modificationHandler}>{!modification ? "Modifier" : "Envoyer"}</button>
                                </div>
                            </div>
                        </div>
                        <div className="infoPerso">
                            <p className="description">Informations personnel</p>
                            <div className="parti_mail">
                                <p className="def">Mail :</p>
                                <input id="mail" value={mail} name="mail" className="mail" type="text" disabled/>
                            </div>
                            <div className="parti_pays">
                                <p className="def">Pays ou Région :</p>
                                <p className="pays_region">France</p>
                            </div>
                            <div className="parti_tel">
                                <p className="def">Tel :</p>
                                <input id="tel" value={phone} name="tel" className="tel" type="text" disabled/>
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