import React, { useState } from 'react';

import AudioCard from 'audiocard';

const Player: React.FC = (props) => {

  const [file, setFile] = useState<string>('');

  if (file) {
    return <AudioCard
    art="https://seekjustice.fm/art300.jpg"
    source="https://dts.podtrac.com/redirect.mp3/seekjustice.fm/media/001.mp3"
    title="Tet"
    skipBackSeconds={30}
    skipForwardSeconds={30} />
  }
  return (
    <div></div>
  );
}

export default Player;