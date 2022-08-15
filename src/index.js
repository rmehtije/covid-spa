import React from 'react';
import ReactDOM from 'react-dom/client';
// import css file kotoryj u nas global'nyj
import './index.css';
import App from './App';
// React berjot div s id root i zapuskaet vess projekt v nego (div)
const root = ReactDOM.createRoot(document.getElementById('root'));
// React StrictMode component kotoryj otvechaet za strogij rezhqm napisanie koda. 
// инструмент для обнаружения потенциальных проблем в приложении
// Izza nego proishodit dopolnitelnqj render componentov

// My zapuskajem nashe prilozhenije... glacnyj Component App
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
