import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import NavigationDashboard from '../components/NavigationDashboard';

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Session from 'react-session-api'
import axios from 'axios'

const locales = {
    'fr': require('date-fns/locale/fr')
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

const apiStringGetEvent = '/edt/' + Session.get("idUser");
  
const events = []

const recupererEvents = () => {
    // api.get(apiStringGetEvent).then((response) => {
    //     response.forEach(element => {
    //         events.push({
    //             title: element.Comment,
    //             start: new Date(element.jour+" "+element.StartTime),
    //             end: new Date(element.jour+" "+element.EndTime)
    //         })
    //     });
    // })
    const event = []
    if (localStorage.getItem("events") !== null &&localStorage.getItem("events") !== "" && localStorage.getItem("events") !== []) {
        JSON.parse(localStorage.getItem("events")).forEach(element => {
            event.push({
                title: element.title,
                start: new Date(element.start),
                end: new Date(element.end)
            })
        });
        return event
    }

    return [];
    
}

const envoyerNouvelleEvent = (event) => {
    // const apiStringPostEvent = '/edt/' + Session.get("idUser");
    // api.post(apiStringPostEvent, {
    //     Comment: event.title,
    //     jour: event.start,
    //     StartTime: event.start,
    //     EndTime: event.end
    // })
}
    


const Calendrier = () => {


    const [theme, setTheme] = useState("light");    
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }
    const [titre, setTitre] = useState("");
    const [jour , setJour] = useState(new Date());
    const [heureDebut, setHeureDebut] = useState(new Date());
    const [heureFin, setHeureFin] = useState(new Date());

    const [allEvents, setAllEvents] = useState(recupererEvents);

    function handleAddEvent() {
        const newEvent = { title: titre, start: new Date(jour+" "+heureDebut), end: new Date(jour+" "+heureFin) };
        setAllEvents([...allEvents, newEvent]);
        localStorage.setItem("events", JSON.stringify([...allEvents, newEvent]));
    }


    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className="page_calendrier">
                {/*Create a calendar page*/}
                <div className="haut_de_page">
                    <h2 className="titre">Calendrier</h2>
                    <link href='fullcalendar/main.css' rel='stylesheet' />
                    <div className="rechLogo">
                        <img className="logo" srcSet="./LogoApp.svg"/>
                    </div>
                </div>

                <div className="bas_de_page">
                    <NavigationDashboard />
                    <div className="Calendrier">
                        <h2 className="Titre">Ajouter un évènement
                            <div className="mini_formulaire_evenement">
                                <input className="ajout_input" type="text" placeholder="Ajoutez un titre" style={{height: "20px", width: "100%", marginRight: "10px"}} 
                                onChange={(e) => setTitre(e.target.value)} />
                                <input className='date' type="date" placeholder="Ajoutez un jour" style={{height: "20px", width: "100%", marginRight: "10px"}} 
                                onChange={(e) => setJour(e.target.value)} />
                                <input className='date' type="time" placeholder="Ajoutez une heure de début" style={{height: "20px", width: "100%", marginRight: "10px"}}
                                onChange={(e) => setHeureDebut(e.target.value)} />
                                <input className='date' type="time" placeholder="Ajoutez une heure de fin" style={{height: "20px", width: "100%", marginRight: "10px"}}
                                onChange={(e) => setHeureFin(e.target.value)} />



                                
                            </div>
                            <button className="bouton_ajout" onClick={handleAddEvent}>
                                <p>Ajouter l'évènement</p>
                            </button>
                        </h2>
                        <Calendar localizer={localizer} events={allEvents} defaultView="week"
                        startAccessor="start" endAccessor="end" style={{height: "100%", width:"99%"}} />
                    </div>
                </div>
            </div>
        </body>
    );
};


export default Calendrier;