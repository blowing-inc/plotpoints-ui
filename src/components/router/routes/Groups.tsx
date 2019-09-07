import React from 'react';
import { Row } from 'reactstrap';

import GroupLayout from '../../layout/GroupLayout';

import Post from '../../groups/Post';
import NewPost from '../../groups/NewPost';


const Groups: React.FC = () => {
  return (
    <GroupLayout>
      <NewPost />
      <Post />
      <Post />
      <Post />
      <Post />
    </GroupLayout>
  );
}

export default Groups;