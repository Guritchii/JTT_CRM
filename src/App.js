import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Connexion from './pages/Connexion';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Connexion/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
