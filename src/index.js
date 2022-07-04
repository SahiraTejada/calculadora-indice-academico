import React from 'react';
import ReactDOM from 'react-dom/client'; //Permite interactuar con la estructra de la pagina web en el navegador
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); 
//devuelve un objeto Element que representa el elemento cuya propiedad id(root)  coincide con la cadena especificada
root.render( //Mostralo en el navegador
  //StrictMode es una herramienta para destacar problemas potenciales en la aplicación
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //Creando el componente de la aplicacion en modo estricto
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
