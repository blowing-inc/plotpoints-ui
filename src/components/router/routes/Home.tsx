import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

const Home: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron>
            <h1 className="display-3"> PlotPoints </h1>
            <p className="lead">A social platform for book clubs</p>
            <hr className="my-2" />
            <p>Make notes, comments, and react to your favorite books without spoiling it for everyone else.</p>
            <p className="lead">
              <Button color="primary">Get Started</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;