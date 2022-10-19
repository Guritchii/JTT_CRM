import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Compte from './pages/Compte';
import Connexion from './pages/Connexion';
import Admin from './pages/Admin.js';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Connexion />} />
       <Route path="/Admin" element={<Admin />} />
       <Route path="/Account" element={<Compte />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
