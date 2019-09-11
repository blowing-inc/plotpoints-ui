import React, { useState } from 'react';
import AudioCard from 'audiocard'
import ListenLayout from '../../layout/ListenLayout';

import Comments from '../../listen/Comments';

// TODO: AJAX
const dummyComments = [
  {"time": 1234, "user": "Daniel", "comment": "Wow so awesome!"},
  {"time": 1555, "user": "Evan", "comment": "Super cool"},
  {"time": 2034, "user": "Michael", "comment": "Socking dongers boys"}
];

const Listen: React.FC = () => {

  const [comments, setComments] = useState([]);

  return (
    <ListenLayout>
      <AudioCard
        art="https://seekjustice.fm/art300.jpg"
        source="https://dts.podtrac.com/redirect.mp3/seekjustice.fm/media/001.mp3"
        title="Tet"
        skipBackSeconds={30}
        skipForwardSeconds={30} />
      <Comments comments={dummyComments} />
    </ListenLayout>
  );
}

export default Listen;