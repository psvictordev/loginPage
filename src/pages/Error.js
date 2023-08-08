import React, {useState} from "react";

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

import { Navigate, useNavigate } from 'react-router-dom';

function ErrorKey() {

    const token = localStorage.getItem(['Victor6015']);
    const [error] = useState(true);

    const navigate = useNavigate();

    const signin = () => {

        navigate('/login');
    }
  
    if (!token) {
        return (
            <>
                <Alert show={error} variant="danger">
                <Alert.Heading className="d-flex justify-content-center">Alert</Alert.Heading>
                <p className="d-flex justify-content-center">
                    Usuário ou Senha Inválidos!
                </p>
                <hr />
                <div className="d-flex justify-content-center">
                    <Button onClick={signin} variant="danger" size="lg">
                        Back to Login Page
                    </Button>
                </div>
                </Alert>
            </>
        );  
    } 
    return <Navigate to='/' replace />

}

export default ErrorKey
