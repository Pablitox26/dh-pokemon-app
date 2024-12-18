import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import App from './App';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>      {}
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>     {}
  </React.StrictMode>
);