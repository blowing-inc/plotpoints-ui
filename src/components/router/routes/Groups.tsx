import React from 'react';

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