import React, {useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';



export default function Login() { 

    const [user, setUser] = useState({});
    const [password, setPassword] = useState({});

    const navigate = useNavigate();

    const signin = () => {

        localStorage.setItem(user + password, true);

        navigate('/error');
    }
    
    return (
        <div>
            <h1>
                Login Page
            </h1>

            <Form onSubmit={signin}>

                <Form.Group>
                    <Form.Label>Usuário:</Form.Label>
                    <Form.Control type="text" name='user' onChange={ (event) => setUser(event.target.value)}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control type="password" name='password' onChange={ (event) => setPassword(event.target.value)}/>
                </Form.Group>
                <br />
                <Button variant='primary' type='submit'>Sign In</Button>{' '}
            </Form> 
        </div>
        

    ) 

} 