import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavigationAdmin from '../components/NavigationAdmin.js';
import { NavLink, useLocation } from "react-router-dom";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

function Admin_supp() {

    const location = useLocation();
    const { iduser } = location.state;

    const [selectedUser, setSelectedUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const apiString = '/User/Id/' + iduser;
        api.get(apiString).then((response) => {
            console.log(response.data[0]);
            setSelectedUsers(response.data[0]);
        });
    }, []);

    function checkDelete(event) {

        event.preventDefault();

        const apiString = '/User/Delete/' + iduser;
        api.delete(apiString).then((response) => {
            console.log(response.data);
        });

        navigate("/Admin_list");
    }

    return (
        <div className="page_admin">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <div className="Titre_Formulaire_Rech">
                <p className="Titre">Admin</p>
                <p className="Sous-titre">Supression d'utilisateur</p>
                <div className="rechLogo">
                    <TableContainer component={Paper} sx={{ maxHeight: 0.8 }}>
                        <Table aria-label="simple table" size="small" stickyHeader>
                            <TableHead >
                                <TableRow>
                                    <TableCell sx={{ bgcolor: 'info.main' }} align="left">Nom</TableCell>
                                    <TableCell sx={{ bgcolor: 'info.main' }} align="center">Prénom</TableCell>
                                    <TableCell sx={{ bgcolor: 'info.main' }} align="center">Identifiant</TableCell>
                                    <TableCell sx={{ bgcolor: 'info.main' }} align="center">Téléphone</TableCell>
                                    <TableCell sx={{ bgcolor: 'info.main' }} align="center">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                                <TableRow>
                                    <TableCell align="left">{selectedUser.lastname}</TableCell>
                                    <TableCell align="center">{selectedUser.firstname}</TableCell>
                                    <TableCell align="center">{selectedUser.login}</TableCell>
                                    <TableCell align="center">{selectedUser.phone}</TableCell>
                                    <TableCell align="center">{selectedUser.mail}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className="bouton_submit">
                        <button className="bouton_val" onClick={checkDelete}>Valider</button>
                        <NavLink className="bouton_ann" to="/Admin_list">Retour</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin_supp;