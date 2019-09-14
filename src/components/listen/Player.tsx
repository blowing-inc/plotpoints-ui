import React from 'react';

import AudioCard from 'audiocard';

interface IProps {
  source: string
}

const Player = (props: IProps) => {
  return (
    <AudioCard
      art="https://seekjustice.fm/art300.jpg"
      source={props.source}
      title="Tet"
      skipBackSeconds={30}
      skipForwardSeconds={30} />
  );
}

export default Player;