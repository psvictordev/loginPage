import React, {useState} from "react";

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from 'react-router-dom';

function ErrorKey() {

    const token = localStorage.getItem(['Victor6015']);
    const [error, setError] = useState(true);

    const navigate = useNavigate();

    const signin = () => {

        navigate('/login');
    }
  
    if (!token) {
        return (
            <>
                <Alert show={error} variant="success">
                <Alert.Heading>Alert</Alert.Heading>
                <p>
                    Usuário ou Senha Inválidos!
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={signin} variant="outline-success">
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