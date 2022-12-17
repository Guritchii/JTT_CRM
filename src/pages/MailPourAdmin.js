import React, {useState} from 'react';
import NavigationDashboard from '../components/NavigationDashboard';
import axios from 'axios';
import Session from 'react-session-api';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
    baseURL: 'http://localhost:8080'
  })

const MailPourAdmin = () => {
    const [mailError, setMailError] = useState(false);  
    const [objetError, setObjetError] = useState(false);  
    const [descriptionError, setDescriptionError] = useState(false);  
    const [theme, setTheme] = useState("light");    
    const navigate = useNavigate();

    if (localStorage.getItem('theme') && localStorage.getItem("theme") !== '' && localStorage.getItem("theme") !== theme) {
        setTheme(localStorage.getItem("theme"))
    }

    function sendMail(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const values = Object.fromEntries(formData.entries());

        console.log(values);      
        if (values.objet === '') {
            setObjetError(true)
        } else {
            setObjetError(false)
        }
        if (values.raison === '') {
            setDescriptionError(true)
        } else {
            setDescriptionError(false)
        }
        if (values.objet === '' || values.raison === '') {
            return
        }
        values.objet = values.objet + "[user id : " + Session.get("idUser") + "]"
        
        
        api.post('/Mail/Avertir',values).then (function(response) {
            if (response.data) {
                navigate('/dashboard')
            }
            else {
                setMailError(true)
                // e.reset();
            }
        });

          
    }

    return (
        <body className={theme}>

            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className="page_mailAdmin">
                <div className="haut_de_page">
                    <h2 className="titre">Signaler un problème</h2>
                    <div className="rechLogo">
                        <img className="logo" srcSet="./LogoApp.svg" />
                    </div>
                </div>
                <div className="bas_de_page">
                    <NavigationDashboard />
                    <form className="form" onSubmit={sendMail}>
                        <div className="Mail">
                            <div className="object">
                                <h3 className="name">Objet</h3>
                                <input name="objet" type="text" placeholder="Objet de l'alerte" className="inputObjet"/>
                            </div>
                            <div className="value">
                                <h3 className="name">Raison</h3>
                                <textarea name="raison" placeholder="Raison de l'alerte" rows="10" cols="180" className="inputArea"/>

                            </div>
                            <p>{mailError === true?"Le mail n'a pas pu être envoyé":''}</p>
                            <p>{objetError === true?"L'objet est obligatoire":''}</p>
                            <p>{descriptionError === true?"La description est obligatoire":''}</p>
                            <div className="submit">
                                <button className="button" type="submit">
                                Envoyer
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </body>
    );
};

export default MailPourAdmin;