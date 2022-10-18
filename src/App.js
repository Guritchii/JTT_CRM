import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import Connexion from './pages/Connexion';
import Admin from './pages/Admin.js';*/
import Compte from './pages/Compte.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Compte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
