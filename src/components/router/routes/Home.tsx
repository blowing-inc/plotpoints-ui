import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { History, LocationState } from 'history';

import HomeLayout from '../../layout/HomeLayout';

interface IProps {
  history: History<LocationState>
}

const Home = (props: IProps) => {

  return (
    <HomeLayout>
      <Jumbotron>
        <h1 className="display-3"> PlotPoints </h1>
        <p className="lead">A social platform for book clubs</p>
        <hr className="my-2" />
        <p>Make notes, comments, and react to your favorite books without spoiling it for everyone else.</p>
        <p className="lead">
          <Button color="primary" onClick={() => props.history.push('/signup')}>Get Started</Button>
        </p>
      </Jumbotron>
    </HomeLayout>
  );
}

export default Home;