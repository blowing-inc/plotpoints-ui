import React from 'react';
import './App.css';
import Header from '../components/Header';

import { Container, Row, Col } from 'reactstrap';

const App: React.FC = () => {
  return (

    <Container>
      <Row>
        <Col> Column 1</Col>
      </Row>

      <Row>
        <Col> Column 1</Col>
        <Col> Column 2</Col>
        <Col> Column 3</Col>
        <Col> Column 3</Col>
      </Row>

    </Container>

  );
}

export default App;
