import React, {Pages} from 'react';
import NavigationDashboard from '../components/NavigationDashboard';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0)
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10)
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23)
    },
  ];

const Calendrier = () => {
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
                    <Calendar localizer={localizer} events={events} 
                    startAccessor="start" endAccessor="end" style={{height: "100%", width:"95%"}}/>
                    </div>
                </div>
            </div>
        </body>
    );
};


export default Calendrier;