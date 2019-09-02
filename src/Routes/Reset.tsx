import React from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, Row
} from 'reactstrap';

const Reset: React.FC = () => {
  return (
    <Container className="reset">
      <h2>Reset your password</h2>
      <Form className="form">
        <Row>
          <Col>
            <FormGroup>
              <Label>
                Email
              </Label>
              <Input type="text" name="email" id="email" placeholder="email@example.com" />
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary">Submit</Button>
      </Form>
    </Container>
  );
}

export default Reset;