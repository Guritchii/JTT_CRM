import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavigationAdmin from '../components/NavigationAdmin.js';
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell } from '@mui/material';
import { Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Session from 'react-session-api';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

function Admin_list() {
    //test rejet
    const navigate = useNavigate();

    useEffect(() => {
        if(Session.get("idUser") == null)
            navigate("/");
    }, []);

    const [theme, setTheme] = useState("light");    
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }

    const [users, setUsers] = useState([]);
    const [selectedIdUser, setSelectedIdUser] = useState();

    useEffect(() =>{
        api.get('/User/All/').then((response) => {
            setUsers(response.data);
            setSelectedIdUser(response.data[0].iduser);
        });
    }, []);

    const handleClick = (event, iduser) => {
        setSelectedIdUser(iduser);
    };


    return (
        <body className="page_admin">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <NavigationAdmin iduser={selectedIdUser}/>
            <div className="Titre_Formulaire_Rech">
                <p className="Titre">Admin</p>
                <p className="Sous-titre">Liste des utilisateurs</p>
                <div className="rechLogo">
                    <div className="input_box">
                    <input type="search" placeholder="Rechercher..."/>
                        <span className="search">
                            <i class="uil uil-search search-icon"></i>
                        </span>
                    </div>
                    <TableContainer component={Paper} sx={{ maxHeight: 0.8 }}>
                        <Table aria-label="simple table" size="small" stickyHeader>
                            <TableHead >
                                <TableRow>
                                    <TableCell sx={{ bgcolor: 'info.main'}} align="left">Nom</TableCell>
                                    <TableCell sx={{ bgcolor: 'info.main'}} align="center">Prénom</TableCell>
                                    <TableCell sx={{ bgcolor: 'info.main'}} align="center">Identifiant</TableCell>
                                    <TableCell sx={{ bgcolor: 'info.main'}} align="center">Téléphone</TableCell>
                                    <TableCell sx={{ bgcolor: 'info.main'}} align="center">Email</TableCell>
                                    <TableCell sx={{ bgcolor: 'info.main'}} align="center">Rôle</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                {users.map((user) => (
                                    <TableRow
                                        key={user.iduser}
                                        hover
                                        onClick={(event) => handleClick(event, user.iduser)}
                                        selected={user.iduser === selectedIdUser}
                                    >
                                        <TableCell align="left">{user.lastname}</TableCell>
                                        <TableCell align="center">{user.firstname}</TableCell>
                                        <TableCell align="center">{user.login}</TableCell>
                                        <TableCell align="center">{user.phone}</TableCell>
                                        <TableCell align="center">{user.mail}</TableCell>
                                        <TableCell align="center">{user.name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
         </body>
    );
};

export default Admin_list;