import React from 'react';
import './App.css';

import { useState } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Protected from './pages/privateRoute'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const navigate = useNavigate();

  const signin = () => {
    setIsSignedIn('Logado', true)

    navigate('/');
  }
  const signout = () => {
    setIsSignedIn(false)
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <Protected isSignedIn={isSignedIn}>
            <Home />
          </Protected>
        }
        />
        <Route path='login' element={
          <Login />
        }
        />
      </Routes>

      {isSignedIn ? (
        <div>
          <button onClick={signout}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={signin}>Sign In</button>
        </div>
      )
      }
    </div>
  )

}


export default App;
