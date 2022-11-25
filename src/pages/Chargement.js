import React, {Component} from 'react';
import ReactLoading from 'react-loading';

const Chargement = () => {

    return (
        <div className="chargement">
            <ReactLoading type="bars" color="#a9a9a9"/>
        </div>
    );
}

export default Chargement;