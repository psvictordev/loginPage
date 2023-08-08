import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Error from './pages/Error'
import Protected from './pages/privateRoute'

function App() {
  useNavigate();

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
        <Route path='error' element={
          <Error />
        }
        />
      </Routes>

    </div>
  )

}

export default App;

