import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";

export default function addDog() {
  return (
    <Container>
      <h1>Adicionar Cachorro</h1>
      <Form>
        <Form.Group>
          <Form.Label className="d-flex justify-content-center">
            Nome:
          </Form.Label>
          <Form.Control type="text" className="content-center" />
        </Form.Group>
        <Form.Group>
          <Form.Label className="d-flex justify-content-center">
            Idade:
          </Form.Label>
          <Form.Control type="text" className="content-center" />
        </Form.Group>
        <Form.Group>
          <Form.Select>
            <option>Selecione a Raça</option>
            <option>API Breeds</option>
          </Form.Select>
        </Form.Group>
      </Form>

      <Button>Salvar</Button>
    </Container>
  );
}
