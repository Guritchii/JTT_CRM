import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Connexion from './pages/Connexion';
import Admin from './pages/Admin.js';
import Admin_supp from './pages/Admin_supp.js';
import Admin_modif from './pages/Admin_modif.js';

const App = () => {
  return (
    //<BrowserRouter>
    //  <Routes>
    //    <Route path="*" element={<Connexion />} />
    //  </Routes>
    //</BrowserRouter>

    <Admin_modif/>
  );
}

export default App;
