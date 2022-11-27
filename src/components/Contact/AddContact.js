import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavigationDashboard from '../NavigationDashboard.js';
import CryptoJS from 'crypto-js';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
// HERE ABOVE useHistory IS REPLACED WITH useNavigate 

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

function AddContact(props) {

    const [loginError, setLoginError] = useState(false);    
    const [entreprises, setEntreprises] = useState([]);
    const [selectedIdEntreprise, setSelectedIdEntreprise] = useState(1);
    
    const navigate=useNavigate();
    
    useEffect(() =>{
        api.get('/Entreprise/All').then((response) => {
            setEntreprises(response.data);
        });
    }, []);

    function handleChangeEntreprise(event){
        setSelectedIdEntreprise(event.target.value);
    };

    function checkAdd(event){
        
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData.entries());
        console.log(values.name);
        api.get('/Contact/Exist/'+ values.login).then((response) => {
            const login = response.data;
            if (login.length > 0){
                setLoginError(true);
            }
            else {
                setLoginError(false);

                api.post('/Contact/Add', values).then (function(response) {
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
                                <div className="texte_côté">
                                    <p>Nom :</p>
                                    <p>Prénom :</p>
                                    <p>Téléphone :</p>
                                    <p>Email :</p>
                                    <p>Entreprise :</p>
                                </div>
                            </tr>
                            <tr>
                                <input id="nom" name='name' className="texte_zone" type="text" placeholder="Nom..." required/>
                                <input id="prenom" name='firstname' className="texte_zone" type="text" placeholder="Prénom..." required/>
                                <input id="phone" name='phone' className="texte_zone" type="tel" 
                                    placeholder="Téléphone..." pattern="[0-9]{10}" required/>
                                <input id="email" name='mail' className="texte_zone" type="email" placeholder="Email..." required/>
                                <Select name='idcustomer' value={selectedIdEntreprise} onChange={handleChangeEntreprise}>
                                    {entreprises.map(entreprise => (<MenuItem value={entreprise.idCustomer}>{entreprise.name}</MenuItem>))}
                                </Select>
                            </tr>
                        </table>
                        <p>{loginError === true?"L'identifiant existe déja":''}</p>
                        <div className="bouton_submit">
                            <button className="bouton_val" type="submit">Valider</button>
                            <NavLink className="bouton_ann" to="/Repertoire">Retour</NavLink>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default AddContact
