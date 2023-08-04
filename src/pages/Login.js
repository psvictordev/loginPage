import React from "react";

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    const signin = () => {
        localStorage.setItem('Anonymous', false);

        navigate('/');
    }

    return (
        <div>
            <h1>
                Login Page
            </h1>

            <Button variant='primary' onClick={signin}>Sign In</Button>{' '}
        </div>
    );
}