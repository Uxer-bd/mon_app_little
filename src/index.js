import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="description" content="Site du meilleur restaurant de la ville"/>
    <meta name="og:title" content="Restaurant Little lemon"/>
    <meta name="og:description" content="Site de restaurant spécialiste des mets avec possiblité de réserver à l'avance pour une expérience hors du commun"/>
    <meta name="og:image" content=""/>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
