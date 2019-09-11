import React from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';

import styles from './Listen.module.css';


interface IComment {
  time: number, // seconds
  user: string,
  comment: string
}

type CommentsProps = {
  comments: [IComment]
}

const Comments = (props: CommentsProps) => {
  return (
    <ListGroup className={styles.listGroup}>
      <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center">

      </ListGroupItem>
      <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center">
        <span><small className="text-muted">21:45</small>  <strong>Daniel</strong></span>
        😲😲😲😲
      </ListGroupItem>
      <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center">
        <span><small className="text-muted">19:21</small>  <strong>Evan</strong></span>
        OMG
      </ListGroupItem>
      <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center">
        <span><small className="text-muted">01:23</small>  <strong>Mike</strong></span>
        Miller is the c00lest
      </ListGroupItem>

    </ListGroup>
  );
}

export default Comments;