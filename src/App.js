import React from 'react';
import './App.css';

import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Protected from './pages/privateRoute'

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <Protected>
            <Home />
          </Protected>
        }
        />
        <Route path='login' element={
          <Login />
        }
        />
      </Routes>

    </div>
  )

}


export default App;


