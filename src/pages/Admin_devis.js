import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavigationAdmin from '../components/NavigationAdmin.js';
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell } from '@mui/material';
import { Paper } from '@mui/material';
import * as XLSX from 'xlsx/xlsx.mjs';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

function Admin_devis() {

    const processExcelFile = (data) =>{
        var workbook = XLSX.read(data, {type: 'binary'});
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];

        const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});;

        dataParse.forEach(line => {
            const apiString = '/Sale/Verif/' + line[2] + '/'+ line[1] + '/' + line[3];
            api.get(apiString).then((response) => {
                const data = response.data;
                if(data.length > 0){
                    const apiStringUpdate = '/Sale/Update/' + data[0].idsale;
                    api.put(apiStringUpdate, line).then((response) => {
                        console.log(response.data);
                    });
                }
                else{
                    api.post('/Sale/Add', line).then (function(response) {
                        console.log(response.data);
                    });
                }
            });
        });
    };

    const fileSelected = (event) => {
        var file = event.target.files[0];

        if(typeof(FileReader) != "undefined") {
            var reader = new FileReader();

            reader.onload = function(event) {
                processExcelFile(event.target.result);
            };

            reader.readAsBinaryString(file);
        }            
    };

    return (
        <div className="page_admin">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <NavigationAdmin />
            <div className="devis">
                <p className="Titre">Devis</p>
                <input type="file" onChange={fileSelected}></input>
            </div>
        </div>
    );
};

export default Admin_devis;