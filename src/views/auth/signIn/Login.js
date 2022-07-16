import React from 'react'
 import  '../../../css/login.css';
 import {Form, Button, Breadcrumb} from 'react-bootstrap';
 import LoginImage from '../../imgs/Reading.svg';
 import { AiFillQuestionCircle } from 'react-icons/ai';
 import {  SiSamsungpay } from 'react-icons/si';
 //Login
 //nciodniw

function Login() {
  return (
   <>
<div className='splitScreen'>
        <div className='topPane text-center'>
            <div>
          <h2 className='newtitle text-white'>¿Eres nuevo?</h2>
          <p className='text-white'>Solicita un usuario para formar parte de Calculadora de indice academico</p>
          <Button  className='text-center btn-transparent '>Solicitar</Button>
        </div>
        <div className='LoginImage-container position-relative'>
            <img className='position-absolute' src={LoginImage}/>
        </div>
        </div>
        <div className='bottomPane text-center'>
            <SiSamsungpay color="#3884e7" size={60}></SiSamsungpay>
         <h2 className='title'>Login</h2>
          <Form >
  <Form.Group className="mb-4" controlId="formUsername">
    <Form.Control  placeholder="Username" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Contraseña" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  </Form.Group>
  <Button variant="primary" type="submit">
    Acceder
  </Button>
    <div>
          <a href='#' className='reset'>
                 ¿Olvidaste tu contraseña?
                </a>
    </div>
</Form>
 <div className='question position-fixed'>
   <Breadcrumb>
      <Breadcrumb.Item href='#'>
        <AiFillQuestionCircle color="#3490ef" size={30}/>
      </Breadcrumb.Item>
    </Breadcrumb>
    </div>
        </div>
    </div>
    </>
  )
}

export default Login
