import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Api from './components/Api';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const api = new Api({ link: 'https://api.akkio.com/api?api_key=', token: '0e6fa5bc-96dc-4e77-9639-f8cec96ce8ed', key: 'DlaaOi8wbv4CYhqrQKny/1' });
// console.log(api.getInfo([{ "field_1 name": "field_1 value", "field_2 name": "field_2 value", "field_3 name": "field_2 value", "field_4 name": "field_2 value" }]));

// const api = new Api({ link: 'https://api.akkio.com/api?api_key=', token: '0e6fa5bc-96dc-4e77-9639-f8cec96ce8ed', key: 'hyx6eVpX3w5hbcOuyruc/1' });
// api.getInfo([{ "Genero": "Masculino", "Esclaridade": "Ensino superior completo", "Estado_civil": "Solteiro (a)", "Faixa_renda": "Nao sabe" }]);