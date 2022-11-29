import React, {useState,useEffect} from 'react';
import axios from 'axios'
import Chart from 'chart.js/auto'
import NavigationDashboard from '../components/NavigationDashboard';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { setDefaultLocale } from 'react-datepicker';
import { private_excludeVariablesFromRoot } from '@mui/material';
import Session from 'react-session-api';

ChartJS.register(ArcElement, Tooltip, Legend);

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

const Analyse = () => {

    const [theme, setTheme] = useState("light");    
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }    

    const [pieDatas, setPieDatas] = useState([]);

    useEffect(() => {
        const date = new Date();
        const nbMonths = 12;
        date.setMonth(date.getMonth() - nbMonths);

        const year = date.getFullYear();
        const month = (date.getMonth() + 1);

        const apiString = '/Sale/Pie/' + Session.get("idUser") + '/' + month + '/' + year;
        api.get(apiString).then((response) => {

            // Don't work !!
            /*
            const data = {
                labels: [response.data.map((d) => d.name)],
                datasets: [
                        {
                        label: 'Sales',
                        data: [response.data.map((d) => d.total)],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                        },
                    ],
            };
            setPieDatas(data);
            */
        
            setPieDatas(response.data);
        });
    }, []);

    const data = {
        labels: [],
        datasets: [
                {
                label: 'Sales',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                },
            ],
    };

    for(let i = 0; i < pieDatas.length; i++)
    {
        data.labels[i] = pieDatas[i].name;
        data.datasets[0].data[i] = pieDatas[i].total;
    }

    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className="page_analyse">
                {/* Create an analysis page */}
                <div className="haut_de_page">
                    <h2 className="titre">Analyse</h2>
                    <div className="rechLogo">
                        <img className="logo" srcSet="./LogoApp.svg"/>
                    </div>
                </div>

                <div className="bas_de_page">
                    <NavigationDashboard />   
                    <div className="Analyse">
                        <div className="Stat_1">
                            Tendances des ventes
                            <Pie data={data}/>
                        </div>
                        <div className="Stat_2">
                            Statistique n°2
                        </div>
                    </div>                       
                </div>
            </div>
        </body>
    );
};


  

export default Analyse;