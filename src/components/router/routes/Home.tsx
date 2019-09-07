import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import HomeLayout from '../../layout/HomeLayout';

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <Jumbotron>
        <h1 className="display-3"> Plot Points </h1>
        <p className="lead">A social platform for book clubs</p>
        <hr className="my-2" />
        <p>Make notes, comments, and react to your favorite books without spoiling it for everyone else.</p>
        <p className="lead">
          <Button color="primary">Get Started</Button>
        </p>
      </Jumbotron>
    </HomeLayout>
  );
}

export default Home;