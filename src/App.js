import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Compte from './pages/Compte';
import Connexion from './pages/Connexion';
import Admin_modif from './pages/Admin_modif';
import Admin_supp from './pages/Admin_supp';
import Admin_devis from './pages/Admin_devis';
import Dashboard from './pages/Dashboard';
import Analyse from './pages/Analyse';
import Admin_list from './pages/Admin_list';
import Admin_create from './pages/Admin_create';
import Calendrier from './pages/Calendrier';
import Repertoire from './pages/Repertoire';
import Parametres from './pages/Parametres';
import Chargement from './pages/Chargement';
import MailPourAdmin from './pages/MailPourAdmin';
import AddContact from './components/Contact/AddContact'
import { Component } from 'fullcalendar';
import RestartPassword from './pages/RestartPassword';




const App = () => {

  <Chargement/>

    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/Admin_create" element={<Admin_create />} />
        <Route path="/Account" element={<Compte />} />
        <Route path="/Admin_list" element={<Admin_list />} />
        <Route path="/Admin_modif" element={<Admin_modif />} />
        <Route path="/Admin_supp" element={<Admin_supp />} />
        <Route path="/Admin_devis" element={<Admin_devis />} />
        <Route path="/RestartPassword" element={<RestartPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Analyse" element={<Analyse />} />
        <Route path="/Calendrier" element={<Calendrier />} />
        <Route path="/Repertoire" element={<Repertoire />} />
        <Route path="/Parametres" element={<Parametres />} />
        <Route path="/Chargement" element={<Chargement />} />
        <Route path="/MailPourAdmin" element={<MailPourAdmin />} />
        <Route path="/Repertoire/add" element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    );
}


export default App;
