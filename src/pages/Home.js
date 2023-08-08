import React from "react";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const usuario = localStorage.getItem("usuario");
  const navigate = useNavigate();

  const signout = () => {
    localStorage.clear();

    navigate("/");
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">
        {usuario} está Logado!
      </h1>

      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={signout} size="lg">
          Sign Out
        </Button>{" "}
      </div>
    </div>
  );
}
