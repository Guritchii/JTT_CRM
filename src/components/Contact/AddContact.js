import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavigationDashboard from '../NavigationDashboard.js';
import CryptoJS from 'crypto-js';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import Session from 'react-session-api';
// HERE ABOVE useHistory IS REPLACED WITH useNavigate 

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

function AddContact() {

    const [loginError, setLoginError] = useState(false);
    const [entreprises, setEntreprises] = useState([]);
    const [selectedIdEntreprise, setSelectedIdEntreprise] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/Entreprise/All').then((response) => {
            setEntreprises(response.data);
        });
    }, []);

    function handleChangeEntreprise(event) {
        setSelectedIdEntreprise(event.target.value);
        console.log("je suis dans handleChangeEntreprise");
    };

    function checkAdd(event) {

        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());
        api.get('/Contact/Exist/' + values.phone).then((response) => {
            const login = response.data;
            if (login.length > 0) {
                setLoginError(true);
            }
            else {
                setLoginError(false);
                const newContact = { firstname: values.firstname, lastname: values.lastname, phone: values.phone, mail: values.mail, iduser: Session.get('idUser'), idcustomer: selectedIdEntreprise };
                api.post('/Contact/Add', newContact).then(function (response) {
                    console.log(response.data);
                });
                navigate("/Repertoire");
            }

        });

    };


    return (
        <div className='addContactPage'>
            <h2>Ajouter un nouveau contact</h2>
            <div className="Formulaire">
                <form className="form" onSubmit={checkAdd}>
                    <table className="Formulaire_de_connexion">
                        <tr>
                            <div className="texte_c??t??">
                                <p>Nom :</p>
                                <p>Pr??nom :</p>
                                <p>T??l??phone :</p>
                                <p>Email :</p>
                                <p>Entreprise :</p>
                            </div>
                        </tr>
                        <tr>
                            <input id="nom" name='firstname' className="texte_zone" type="text" placeholder="Nom..." required />
                            <input id="prenom" name='lastname' className="texte_zone" type="text" placeholder="Pr??nom..." required />
                            <input id="phone" name='phone' className="texte_zone" type="tel"
                                placeholder="T??l??phone..." pattern="[0-9]{10}" required />
                            <input id="email" name='mail' className="texte_zone" type="email" placeholder="Email..." required />
                            <Select name='idcustomer' value={selectedIdEntreprise} onChange={handleChangeEntreprise}>
                                {entreprises.map(entreprise => (<MenuItem value={entreprise.idcustomer}>{entreprise.name}</MenuItem>))}
                            </Select>
                        </tr>
                    </table>
                    <p>{loginError === true ? "Le contact existe d??ja" : ''}</p>
                    <div className="bouton_submit">
                        <button className="bouton_val" type="submit">Valider</button>
                        <NavLink className="bouton_ann" to="/Repertoire">Retour</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddContact;
