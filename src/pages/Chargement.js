import React from 'react';
import ReactLoading from 'react-loading';



const Chargement = () => {

    return(
        <div className="chargement">
            <img className="logo" srcSet="./LogoApp.svg"></img>
            <ReactLoading type="bars" color="#a9a9a9" />
        </div>
    );
}

export default Chargement;