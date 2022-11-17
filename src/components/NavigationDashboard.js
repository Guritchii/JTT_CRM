import React, { Component, useRef } from 'react';
import { render } from 'react-dom';
import { NavLink } from 'react-router-dom';

//Pour image compte
import img1 from '../img/logo_person.svg'
import img11 from '../img/logo_person_vide.svg'

//Pour image dashboard
import img2 from '../img/logo_speed.svg'
import img21 from '../img/logo_speed_vide.svg'

//Pour image analyse
import img3 from '../img/logo_graph.svg'
import img31 from '../img/logo_graph_vide.svg'

//Pour image calendrier
import img4 from '../img/logo_calendrier.svg'
import img41 from '../img/logo_calendrier_vide.svg'

//Pour image repertoire
import img5 from '../img/logo_group.svg'
import img51 from '../img/logo_group_vide.svg'

//Pour image parametre
import img6 from '../img/logo_parametre.svg'
import img61 from '../img/logo_parametre_vide.svg'

const NavigationDashboard = () => {

    const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
        const imageRef = useRef(null);

        return (
            <img
                onMouseOver={() => { imageRef.current.src = secondaryImg; }}
                onMouseOut={() => { imageRef.current.src = primaryImg; }}
                src={primaryImg}
                alt=""
                ref={imageRef}
            />
        )
    }

    return (
        <div className="nav_bar_verticale">
            <div className="parti_one">
                <NavLink className="mon_compte" to="/Account">
                    <button className="button" type="submit">
                        <ImageToggleOnMouseOver primaryImg={img1} secondaryImg={img11} alt="" />
                    </button>
                </NavLink>
            </div>
            <div className="parti_two">
                <NavLink className="dashboard" to="/Dashboard">
                    <button className="button" type="submit">
                        <ImageToggleOnMouseOver primaryImg={img2} secondaryImg={img21} alt="" />
                    </button>
                </NavLink>
                <NavLink className="analyse" to="/Analyse">
                        <button className="button" type="submit">
                            <ImageToggleOnMouseOver primaryImg={img3} secondaryImg={img31} alt="" />
                        </button>
                </NavLink>
                <NavLink className="calendrier" to="/Calendrier">
                        <button className="button" type="submit">
                            <ImageToggleOnMouseOver primaryImg={img4} secondaryImg={img41} alt="" />
                        </button>
                </NavLink>
            </div>
            <div className="parti_three">
                <NavLink className="repertoire" to="/Repertoire">
                    <button className="button" type="submit">
                        <ImageToggleOnMouseOver primaryImg={img5} secondaryImg={img51} alt="" />
                    </button>
                </NavLink>
            </div>
            <div className="parti_four">
                <NavLink className="parametres" to="/Parametres">
                    <button className="button" type="submit">
                        <ImageToggleOnMouseOver primaryImg={img6} secondaryImg={img61} alt="" />
                    </button>
                </NavLink>
            </div>
        </div>
    );
};


export default NavigationDashboard;