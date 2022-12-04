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

    const [excelData, setExcelData] = useState([]);

    const processExcelFile = (data) =>{
        var workbook = XLSX.read(data, {type: 'binary'});
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];

        const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
        setExcelData(dataParse);

        dataParse.forEach(line => {
            //api.get('/Role/All/').then((response) => {
            //    console.log(response.data);
            //});
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