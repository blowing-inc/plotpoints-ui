import React from 'react';

import { Button, Card, CardBody, Form, FormGroup, Input, Label } from 'reactstrap';

import styles from './Groups.module.css';

const NewPost: React.FC = () => {
  return (
    <div>
      <Card className={styles.card}>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="comment-body">Comment</Label>
              <Input type="text" name="comment-body" placeholder="Share your thoughts" />
            </FormGroup>
            <Button className="primary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default NewPost;