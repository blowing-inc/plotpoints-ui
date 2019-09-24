import React, { useState, SetStateAction } from 'react';

import { ListGroup, ListGroupItem, Form, FormGroup, Input } from 'reactstrap';

import styles from './Listen.module.css';


interface CommentsProps {
  groupId: string,
  seconds: number,
  setSeconds: React.Dispatch<SetStateAction<number>>
}

interface IComment {
  time: number
  user: string
  comment: string
}

type FormElem = React.FormEvent<HTMLFormElement>;

// TODO: AJAX
const dummyComments = [
  { time: 2, user: "Ben", comment: "Sick beat 🔥🔥🔥" },
  { time: 10, user: "Daniel", comment: "Did he just say the N word?" },
  { time: 23, user: "Evan", comment: "actually pretty good..." },
  { time: 30, user: "Michael", comment: "😱😱😱" },
  { time: 234, user: "Ben", comment: "Goodness gracious whoa is me" },
  { time: 235, user: "Dan", comment: "Dang boiiiisss" },
  { time: 235, user: "Evan", comment: "Whitest guys I know" },
  { time: 235, user: "Michael", comment: "oh my gawwwwdddd" },
  { time: 236, user: "Michael", comment: "love it" }
];

const Comments = (props: CommentsProps) => {

  const [comments, setComments] = useState<IComment[]>(dummyComments);
  const [body, setBody] = useState<string>('');
  const { seconds } = props;

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addComment(body);
    setBody('');
  }

  const addComment = (commentBody: string): void => {
    const newComments: IComment[] = [...comments, { time: props.seconds, user: "user", comment: commentBody }];
    setComments(newComments);
  }

  const formatTime = (seconds: number): string => {
    let minutes = Math.floor(seconds / 60)
    let remSeconds = seconds - (minutes * 60)
    return `${minutes}:${remSeconds}`
  }

  return (
    <ListGroup className={styles.listGroup}>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input 
            type="text" 
            name="comment-body" 
            placeholder={"(" + formatTime(seconds) + ") Share your thoughts"}
            onChange={e => setBody(e.target.value)} 
            required value={body} />
          <Input type="submit" hidden />
        </FormGroup>
      </Form>

      {comments
        .slice()
        .reverse()
        .filter(comment => comment.time < seconds)
        .map((comment: IComment, index: number) => {
        return <ListGroupItem key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span><small className="text-muted">{formatTime(comment.time)}</small>  <strong>{comment.user}</strong></span>
          {comment.comment}
        </ListGroupItem>
      })}

    </ListGroup>
  );
}

export default Comments;