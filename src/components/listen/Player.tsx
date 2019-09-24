import React, { useState, SetStateAction } from 'react';

// import AudioCard from 'audiocard';
import ReactAudioPlayer from 'react-audio-player';

interface IProps {
  source: string
  seconds: number,
  setSeconds: React.Dispatch<SetStateAction<number>>
}

const Player = (props: IProps) => {

  const { setSeconds } = props;
  const [ volume, setVolume ] = useState<number>(1.0);

  const updateTime = (e: any) => {
    setSeconds(Math.round(e));
  }

  const divStyle = {
    width: "100%",
  }

  return (
    <ReactAudioPlayer 
      src={props.source}
      controls
      listenInterval={1000}
      volume={volume}
      onListen={(e: any) => updateTime(e) }
      onSeeked={(e: any) => updateTime(e) }
      onVolumeChanged={(e: any) => setVolume(e)}
      style={divStyle}
    />
  );
}

export default Player;