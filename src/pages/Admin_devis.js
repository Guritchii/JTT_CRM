import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavigationAdmin from '../components/NavigationAdmin.js';
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell } from '@mui/material';
import { Paper } from '@mui/material';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

const Admin_devis = () => {

    return (
        <div className="page_admin">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            {/* Create a page to delete an user in the admin page*/}
            <NavigationAdmin />
            <div className="Titre_Formulaire_Rech">
                <p className="Titre">Admin</p>
                <p className="Sous-titre">Supression d'utilisateur</p>
                <div className="rechLogo">
                    <div className="input_box">
                    <input type="search" placeholder="Rechercher..."/>
                        <span className="search">
                            <i class="uil uil-search search-icon"></i>
                        </span>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default Admin_devis;