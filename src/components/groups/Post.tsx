import React from 'react';

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

import styles from './Groups.module.css';

const Post: React.FC = (props) => {
  return (
    <div className={styles.card}>
      <Card body className={styles.card}>
        <CardBody>
          <CardTitle>
            <strong>Evan Malmud</strong>
          </CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardText>
             <small className="text-muted"> 11:11 1/2/2019 </small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Post;