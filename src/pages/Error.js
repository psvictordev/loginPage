import React from "react";

import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';

function ErrorKey() {

    const token = localStorage.getItem(['Victor6015']);

    const navigate = useNavigate();

    const signin = () => {

        navigate('/login');
    }
  
    if (!token) {
        return (
            <div>
            <h1>Usúario ou Senha Inválidos</h1> 
            <Button variant='primary' onClick={signin}>Back to Login Page</Button>{' '}
            </div>
        )   
    } 
    return <Navigate to='/' replace />

}

export default ErrorKey