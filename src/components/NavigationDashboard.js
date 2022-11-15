import React from 'react';
import { NavLink } from 'react-router-dom';


const NavigationDashboard = () => {
    return (
        <div className="nav_bar_verticale">
            <NavLink className="mon_compte" to="/Account">
                <div className="parti_one">
                    <button className="button" type="submit">
                        <img className="logo_nav_bar" srcSet="./logo_person.svg"/>                       
                    </button>
                </div>
            </NavLink>
            <NavLink className="dashboard" to="/Dashboard">
                <div className="parti_two">
                    <button className="button" type="submit">
                        <img className="logo_nav_bar" srcSet="./logo_speed.svg"/> 
                    </button>
                    <NavLink className="analyse" to="/Analyse">
                        <div className="parti_two">
                            <button className="button" type="submit">
                                <img className="logo_nav_bar" srcSet="./logo_graph.svg"/>
                            </button>
                        </div>
                    </NavLink>
                    <NavLink className="calendrier" to="/Calendrier">
                        <div className="parti_two">
                            <button className="button" type="submit">
                                <img className="logo_nav_bar" srcSet="./logo_calendrier.svg"/>
                            </button>
                        </div>
                    </NavLink>
                </div>
            </NavLink>
            <NavLink className="repertoire" to="/Repertoire">
                <div className="parti_three">
                    <button className="button" type="submit">
                        <img className="logo_nav_bar" srcSet="./logo_group.svg"/>
                    </button>
                </div>
            </NavLink>
            <NavLink className="parametres" to="/Parametres">
                <div className="parti_four">
                    <button className="button" type="submit">
                        <img className="logo_nav_bar" srcSet="./logo_parametre.svg"/>
                    </button>
                </div>
            </NavLink>
        </div>
    );
};


export default NavigationDashboard;