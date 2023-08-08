import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";

const validaLogin = {
  username: "a",
  password: "b",
};

export default function Login() {
  const [user, setUser] = useState({});
  const [password, setPassword] = useState({});
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();
    if (user !== validaLogin.username || password !== validaLogin.password) {
      setError(true);
      return;
    }

    localStorage.setItem("usuario", "Victor Brocolis");

    navigate("/");
  };

  return (
    <Container fluid="sm">
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
      <Row>
        <Col>
          <h1 className="d-flex justify-content-center">Login Page</h1>
        </Col>
      </Row>

      <Form onSubmit={signin}>
        <Form.Group>
          <Form.Label className="d-flex justify-content-center">
            Usuário:
          </Form.Label>
          <Form.Control
            type="text"
            name="user"
            onChange={(event) => setUser(event.target.value)}
            className="content-center"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="d-flex justify-content-center">
            Senha:
          </Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>
        <br />
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" size="lg">
            Sign In
          </Button>{" "}
        </div>
      </Form>
    </Container>
  );
}
