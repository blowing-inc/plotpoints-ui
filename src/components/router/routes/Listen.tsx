import React from 'react';
import AudioCard from 'audiocard'
import ListenLayout from '../../layout/ListenLayout';

import Comments from '../../listen/Comments';


const Listen: React.FC = (props) => {
  return (
    <ListenLayout>
      <AudioCard
        art="https://seekjustice.fm/art300.jpg"
        source="https://dts.podtrac.com/redirect.mp3/seekjustice.fm/media/001.mp3"
        title="Tet"
        skipBackSeconds={30}
        skipForwardSeconds={30} />
      <Comments />
    </ListenLayout>
  );
}

export default Listen;