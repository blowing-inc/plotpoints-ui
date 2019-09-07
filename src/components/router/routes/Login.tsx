import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <Container className="Login">
      <h2> Sign In </h2>
      <Form className="form">
        <Row>
          <Col>
            <FormGroup>
              <Label>
                Email
              </Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="myemail@email.com" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="********" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button>Submit</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/reset-password">Forgot your password?</Link><br />
            <Link to="/signup">No account? Create one now!</Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Login;