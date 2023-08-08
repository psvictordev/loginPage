import React from "react";

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    const signout = () => {
        localStorage.clear();

        navigate('/');  
    }

    return (
        <div>
            <h1 className="d-flex justify-content-center">
                Você está Logado!
            </h1>

            <div className="d-flex justify-content-center">
                <Button variant='primary' onClick={signout} size='lg'>Sign Out</Button>{' '}
            </div>
        </div>
    );
}
