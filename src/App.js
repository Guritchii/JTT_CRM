import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connexion from './pages/Connexion';
import Admin from './pages/Admin.js';

const App = () => {
  return (
    //<BrowserRouter>
    //  <Routes>
    //    <Route path="*" element={<Connexion />} />
    //  </Routes>
    //</BrowserRouter>

    <Connexion />
  );
}

export default App;
