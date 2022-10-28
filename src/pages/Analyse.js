import React from 'react';
import axios from 'axios'
import Chart from 'chart.js/auto'
window.Chart = Chart

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })


const Analyse = () => {
    return (
        <div className="page_analyse">
            {/* Create an analysis page */}
            <div className="haut_de_page">
                <h2 className="titre">Analyse</h2>
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
                <div className="nav_bar_verticale">
                    <div className="parti_one">
                        <button className="button" type="submit">
                            <img className="logo_nav_bar" srcSet="./logo_person.svg"/>                        
                        </button>
                    </div>  
                    <div className="parti_two">
                        <button className="button" type="submit">
                            <img className="logo_nav_bar" srcSet="./logo_speed.svg"/> 
                        </button>
                        <button className="button" type="submit">
                            <img className="logo_nav_bar" srcSet="./logo_graph.svg"/>
                        </button>
                        <button className="button" type="submit">
                            <img className="logo_nav_bar" srcSet="./logo_calendrier.svg"/>
                        </button>
                    </div>
                    <div className="parti_three">
                        <button className="button" type="submit">
                            <img className="logo_nav_bar" srcSet="./logo_group.svg"/>
                        </button>
                    </div>   
                    <div className="parti_four">
                        <button className="button" type="submit">
                            <img className="logo_nav_bar" srcSet="./logo_parametre.svg"/>
                        </button>
                    </div>                                    
                </div>
                <div className="Analyse">
                    <div className="statistiques_1">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};


  

export default Analyse;