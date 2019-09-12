import React, { useState } from 'react';

import { ListGroup, ListGroupItem, Form, FormGroup, Input } from 'reactstrap';

import styles from './Listen.module.css';


type CommentsProps = {
  groupId: string
}

interface IComment {
  time: number
  user: string
  comment: string
}

type FormElem = React.FormEvent<HTMLFormElement>;

// TODO: AJAX
const dummyComments = [
  {time: 1234, user: "Daniel", comment: "Wow so awesome!"},
  {time: 1555, user: "Evan", comment: "Super cool"},
  {time: 2034, user: "Michael", comment: "Socking dongers boys"}
]; 

const Comments = (props: CommentsProps) => {
  
  const [comments, setComments] = useState<IComment[]>(dummyComments);
  const [body, setBody] = useState<string>('');

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addComment(body);
    setBody('');
  }
  
  const addComment = (commentBody: string): void => {
    const newComments: IComment[] = [...comments, { time: Date.now(), user: "user", comment: commentBody }];
    setComments(newComments);
  }

  return (
    <ListGroup className={styles.listGroup}>
      <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input type="text" name="comment-body" placeholder="Share your thoughts" onChange={e => setBody(e.target.value)} required value={body} />
            <Input type="submit" hidden />
          </FormGroup>
        </Form>
      </ListGroupItem>

      {comments.map((comment: IComment, index: number) => {
        return <ListGroupItem key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span><small className="text-muted">{comment.time}</small>  <strong>{comment.user}</strong></span>
            {comment.comment}
          </ListGroupItem>
      })}

    </ListGroup>
  );
}

export default Comments;