import React from 'react';


const Dashboard = () => {
    return (
        <body className='corps_page_dashboard'>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className='page_principale'>
                {/* Create a principal page */}
                <div className="haut_de_page">
                    <h2 className="titre">Dashboard</h2>
                    <div className="rechLogo">
                        <div className="input_box">
                            <input type="search" placeholder="Rechercher..."/>
                            <span className="search">
                                <i class="uil uil-search search-icon"></i>
                            </span>
                        </div>
                    </div>
                    <img className="logo" srcSet="./LogoApp.svg"/>
                </div>
            </div>
        </body>
    );
};

export default Dashboard;