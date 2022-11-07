import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import NavigationDashboard from '../components/NavigationDashboard';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
  });
  
  const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 10, 0),
        end: new Date(2022, 10, 2)
    },
    {
        title: "Vacation",
        start: new Date(2022, 10, 7),
        end: new Date(2022, 10, 9)
    },
    {
        title: "Conference",
        start: new Date(2022, 10, 14),
        end: new Date(2022, 10, 16)
    },
  ];

    


const Calendrier = () => {

    const [newEvent, setNewEvent] = useState({Titre: "", Début: "", Fin:""});
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent])
    }

    return (
        <body>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className="page_calendrier">
                {/*Create a calendar page*/}
                <div className="haut_de_page">
                    <h2 className="titre">Calendrier</h2>
                    <link href='fullcalendar/main.css' rel='stylesheet' />
                    <div className="rechLogo">
                        <div className="input_box">
                            <input type="search" placeholder="Rechercher..."/>
                            <span className="search">
                                <i class="uil uil-search search-icon"></i>
                            </span>
                        </div>
                        <img className="logo" srcSet="./LogoApp.svg"/>
                    </div>
                </div>

                <div className="bas_de_page">
                    <NavigationDashboard />
                    <div className="Calendrier">
                    <h2>Ajouter un évènement</h2>
                    <div className="mini_formulaire_evenement">
                        <input type="text" placeholder="Ajoutez un titre" style={{height: "50%", width: "100%", marginRight: "10px"}} 
                            value={newEvent.Titre} onChange={(e) => setNewEvent({...newEvent, Titre: e.target.value})}
                        />
                        <DatePicker placeholderText="Date de début" style={{marginRight: "10px"}}
                        selected={newEvent.Début} onChange={(Début) => setNewEvent({...newEvent, Début})} />
                        <DatePicker placeholderText="Date de fin"
                        selected={newEvent.Fin} onChange={(Fin) => setNewEvent({...newEvent, Fin})} />
                        <button onClick={handleAddEvent}>Ajouter l'évènement</button>
                    </div>
                    <Calendar localizer={localizer} events={allEvents} 
                    startAccessor="start" endAccessor="end" style={{height: "100%", width:"99%"}}/>
                    </div>
                </div>
            </div>
        </body>
    );
};


export default Calendrier;