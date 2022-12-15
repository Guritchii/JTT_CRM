import React, { useState,useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import NavigationDashboard from '../components/NavigationDashboard';
import axios from 'axios';
import Session from 'react-session-api';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";


const api = axios.create({
    baseURL: 'http://localhost:8080'
})

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

function Calendrier(){

    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(1);
    const [allEvents, setAllEvents] = useState([]);

    useEffect(() =>{
        const apiString = '/Contact/' + Session.get("idUser");
        api.get(apiString).then((response) => {
            setContacts(response.data);
        setSelectedContact(response.data[0].idcontact)
        });

        const apiStringEvent = '/Event/' + Session.get("idUser");
        api.get(apiStringEvent).then((response) => {
            setAllEvents([]);
            response.data.forEach(event => {
                const newEvent = { title: event.comment, start: new Date(event.date+" "+event.starttime), end: new Date(event.date+" "+event.endtime) };
                setAllEvents(allEvents => [...allEvents, newEvent]);
            });
        });

    }, []);

    const [theme, setTheme] = useState("light");    
    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }

    const [titre, setTitre] = useState("");
    const [jour , setJour] = useState(new Date());
    const [heureDebut, setHeureDebut] = useState(new Date());
    const [heureFin, setHeureFin] = useState(new Date());

    function handleAddEvent() {
        const newEvent = { title: titre, start: new Date(jour+" "+heureDebut), end: new Date(jour+" "+heureFin) };
        const newEventBD = { date: jour,starttime: heureDebut,endtime: heureFin,comment: titre, idusersend: Session.get("idUser"),iduserreceive: Session.get("idUser"), idcontact: selectedContact};
        api.post('/Event/Add', newEventBD).then (function(response) {
            console.log(response.data);
        });
        setAllEvents([...allEvents, newEvent]);
    }

    function handleChangeContact(event){
        setSelectedContact(event.target.value);
    };

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
                                <input className="ajout_input" type="text" placeholder="Ajoutez un titre" style={{height: "20px", width: "100%", marginRight: "10px", marginLeft: "10px",marginBottom: "10px"}} 
                                onChange={(e) => setTitre(e.target.value)} />
                                <input className='date' type="date" placeholder="Ajoutez un jour" style={{height: "70%", width: "90%", marginRight: "10px", marginLeft: "10px", marginBottom: "10px", borderRadius: "10px"}} 
                                onChange={(e) => setJour(e.target.value)} />
                                <input className='date' type="time" placeholder="Ajoutez une heure de début" style={{height: "70%", width: "90%", marginRight: "10px" , marginLeft: "10px",marginBottom: "10px", borderRadius: "10px"}}
                                onChange={(e) => setHeureDebut(e.target.value)} />
                                <input className='date' type="time" placeholder="Ajoutez une heure de fin" style={{height: "70%", width: "90%", marginRight: "10px", marginLeft: "10px", marginBottom: "10px", borderRadius: "10px"}}
                                onChange={(e) => setHeureFin(e.target.value)} />
                                <Select
                                    className="select"
                                    name='idcontact'
                                    value={selectedContact}
                                    onChange={handleChangeContact}
                                    >
                                    {contacts.map(contact => (
                                        <MenuItem value={contact.idcontact}>{contact.firstname + contact.lastname + '\n(' + contact.name + ')'}</MenuItem>    
                                    ))}
                                </Select>
                            </div>
                            <button className="bouton_ajout" onClick={handleAddEvent}>
                                Ajouter l'évènement
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