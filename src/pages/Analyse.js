import React, {useState,useEffect} from 'react';
import axios from 'axios'
import Chart from 'chart.js/auto'
import NavigationDashboard from '../components/NavigationDashboard';
import { Pie,Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';
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
    const [lineDatas, setLineDatas] = useState([]);

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

        const apiStringLine = '/Sale/Line/' + Session.get("idUser") + '/' + month + '/' + year;
        api.get(apiStringLine).then((response) => {
            setLineDatas(response.data);
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
                fontColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
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

    const dataH = {
        labels: [],
        datasets: [
                {
                label: 'Sales',
                fill: true,
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor:'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                },
            ],
    };

    for(let i = 0; i < lineDatas.length; i++)
    {
        dataH.labels[i] = lineDatas[i].month +"/" +lineDatas[i].year;
        dataH.datasets[0].data[i] = lineDatas[i].total;
    }

    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className="page_analyse">
                <div className="haut_de_page">
                    <h2 className="titre">Analyse</h2>
                    <div className="rechLogo">
                        <img className="logo" srcSet={theme === "light" ? './LogoApp.svg' : './LogoApp_light.svg'}/>
                    </div>
                </div>

                <div className="bas_de_page">
                    <NavigationDashboard />   
                    <div className="Analyse">
                        <div className="Stat-1">
                            <div className="Stat-1_titre">
                                <p>Tendances des ventes</p>
                            </div>
                            <div className='camenbert'>
                                <Pie data={data}/>
                            </div>
                        </div>
                        <div className="Stat-2">
                            <div className="Stat-2_titre">
                                <p>Courbe des ventes</p>
                            </div>
                            <div className="histogramme">
                                <Line data={dataH}/>
                            </div>
                        </div>
                    </div>                       
                </div>
            </div>
        </body>
    );
};


  

export default Analyse;