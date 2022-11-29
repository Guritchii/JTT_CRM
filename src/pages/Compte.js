import { Component } from '@fullcalendar/core';
import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import NavigationDashboard from '../components/NavigationDashboard';
import img1 from '../img/logo_personEntouré.svg';
import axios from 'axios'


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

    const [users, setUsers] = useState([]);
    const [selectedIdUser, setSelectedIdUser] = useState();

    useEffect(() =>{
        api.get('/User/Id/:id').then((response) => {
            setUsers(response.data);
            setSelectedIdUser(response.data[0].iduser);
        });
    }, []);

    const handleClick = (event, iduser) => {
        setSelectedIdUser(iduser);
    };


    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className="page_compte">
                {/* Create an account page */}
                <div className="haut_de_page">
                    <h2 className="titre">Mon Compte</h2>
                    <div className="rechLogo">
                        <img className="logo" srcSet="./LogoApp.svg" />
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
                                    <input type="file" name="fileUpload" id="input" accept="image/" onChange={handleChange} />
                                    <div className="label">
                                        <label className="fileUpload" htmlFor="input">
                                            Ajoutez votre photo
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="name">
                            {users.map((user) => (
                                    <div className="presentationNom"
                                        key={user.iduser}
                                        hover
                                        onClick={(event) => handleClick(event, user.iduser)}
                                        selected={user.iduser === selectedIdUser}
                                    >
                                        <p id="texte" className="def">Nom Complet :</p>
                                        <p id="texte" className="nom">{user.lastname}</p>
                                    </div>
                                ))}
                                <div className='bouton_submit'>
                                    <button id="bouton" className="bouton_modifierNom" type="submit" onClick={modificationHandler}>{!modification ? "Modifier" : "Envoyer"}</button>
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