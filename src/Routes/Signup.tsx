import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row
} from 'reactstrap';

const Signup: React.FC = () => {
  return (
    <Container className="Login">
      <h2> Sign Up </h2>
      <Form className="form">
        <Row>
          <Col>
            <FormGroup>
              <Label>
                Username
              </Label>
              <Input type="text" name="username" id="username" placeholder="Username" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>
                Full Name
              </Label>
              <Input type="text" name="name" id="name" placeholder="Full Name" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>
                Email
              </Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="myemail@email.com" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="********" />
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default Signup;