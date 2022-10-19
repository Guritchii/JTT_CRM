import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Compte from './pages/Compte';
import Connexion from './pages/Connexion';
import Admin from './pages/Admin.js';
import Admin_supp from './pages/Admin_supp.js';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Connexion />} />
       <Route path="/Admin" element={<Admin />} />
       <Route path="/Account" element={<Compte />} />
       <Route path="/Admin_supp" element={<Admin_supp />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
