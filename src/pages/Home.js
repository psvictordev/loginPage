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

  const addDog = () => {
    navigate("./AddDog");
  };

  return (
    <div>
      <h1 className="d-flex justify-content-center">Cachorro de {usuario}!</h1>

      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={addDog} size="lg">
          Adicionar Cachorro
        </Button>{" "}
      </div>

      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={signout} size="lg">
          Sign Out
        </Button>{" "}
      </div>
    </div>
  );
}
