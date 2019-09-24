import React, { SetStateAction } from 'react';

// import AudioCard from 'audiocard';
import ReactAudioPlayer from 'react-audio-player';

interface IProps {
  source: string
  seconds: number,
  setSeconds: React.Dispatch<SetStateAction<number>>
}

const Player = (props: IProps) => {

  const { seconds, setSeconds } = props;

  const updateTime = (e: any) => {
    setSeconds(Math.round(e));
  }

  return (
    <ReactAudioPlayer 
      src={props.source}
      controls
      listenInterval={1000}
      onListen={(e: any) => updateTime(e) }
      onSeeked={(e: any) => updateTime(e) }
    />
  );
}

export default Player;