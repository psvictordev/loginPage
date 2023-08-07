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
            <h1>
                Você está Logado!
            </h1>

            <Button variant='primary' onClick={signout}>Sign Out</Button>{' '}

        </div>
    );
}
