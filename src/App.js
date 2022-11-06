import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Compte from './pages/Compte';
import Connexion from './pages/Connexion';
import Admin_modif from './pages/Admin_modif';
import Admin_supp from './pages/Admin_supp';
import Dashboard from './pages/Dashboard';
import Analyse from './pages/Analyse';
import Admin_list from './pages/Admin_list';
import Admin_create from './pages/Admin_create';
import Calendrier from './pages/Calendrier';
import Repertoire from './pages/Repertoire';
import Parametres from './pages/Parametres';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Connexion />} />
      <Route path="/Admin_create" element={<Admin_create />} />
      <Route path="/Account" element={<Compte />} />
      <Route path="/Admin_list" element={<Admin_list />} />
      <Route path="/Admin_modif" element={<Admin_modif />} />
      <Route path="/Admin_supp" element={<Admin_supp />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Analyse" element={<Analyse />} />
      <Route path="/Calendrier" element={<Calendrier />} />
      <Route path="/Repertoire" element={<Repertoire />} />
      <Route path="/Parametres" element={<Parametres />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
