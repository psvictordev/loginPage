import React, { useState } from "react";
import "../style.css";

import { Navigate, useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

const validaLogin = {
  username: "a",
  password: "b",
};

function Login() {
  const [user, setUser] = useState({});
  const [password, setPassword] = useState({});
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const token = localStorage.getItem("usuario");

  if (token) {
    return <Navigate to="/" replace />;
  }

  const signin = (e) => {
    e.preventDefault();
    if (user !== validaLogin.username || password !== validaLogin.password) {
      setError(true);
      return;
    }

    localStorage.setItem("usuario", "Victor");

    navigate("/");
  };

  return (
    <div className="login templete d-flex justify-content-center align-items-center vh-100 bg-primary">
      {error && (
        <Alert show={error} variant="danger">
          <Alert.Heading className="d-flex justify-content-center">
            Alert
          </Alert.Heading>
          <p className="d-flex justify-content-center">
            Usuário ou Senha Inválidos!
          </p>
        </Alert>
      )}
      <div className="form_container p-5 rounded bg-white ">
        <form onSubmit={signin}>
          <h3 className="text-center">Login Page</h3>
          <div className="mb-2">
            <label type="text"> User </label>
            <input
              type="text"
              placeholder="Enter User"
              className="form-control"
              onChange={(event) => setUser(event.target.value)}
            ></input>
          </div>
          <div className="mb-2">
            <label htmlFor="password"> Password </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
