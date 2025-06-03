import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ProjetosSociais from './pages/ProjetosSociais';
import Unidades from './pages/Unidades';
import NossosProjetos from './pages/NossosProjetos';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projetos-sociais" element={<ProjetosSociais />} />
        <Route path="/unidades" element={<Unidades />} />
        <Route path="/nossos-projetos" element={<NossosProjetos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
