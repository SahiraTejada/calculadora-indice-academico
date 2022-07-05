import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal,Table,Row,Col,Button,Alert,Breadcrumb,Card,Form} from 'react-bootstrap';
import Login from './components/login/Login';
//Archivo tipo javascript que crea el componente pricipal que va contener toda la estructura de la aplicacion

function App() {
  return ( 
    //Nos permite returnar la estructura de la aplicacion
    //Uso de JSX(Mezcla de HTML con JavaScript)
    <div className="App">
      <header className="App-header">
      <Login></Login>
      </header>
    </div>
  );
}

export default App; //Permitir que se muestre la aplicacion
