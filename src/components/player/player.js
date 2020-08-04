import React from 'react';
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player';
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';
import 'react-h5-audio-player/lib/styles.css';
import './player.css';

const streamUrl = 'https://raw.githubusercontent.com/HannaKaliada/rslang-data/master/files/01_0004_meaning.mp3';
const themeColor = '#3498DB';
const CustomIcons = {
  play: <FaRegPlayCircle fill={themeColor} />,
  pause: <FaRegPauseCircle fill={themeColor} />,
}
const Player = () => (
  <AudioPlayer
    autoPlay
    layout="horizontal-reverse"
    src={streamUrl}
    showJumpControls={false}
    customProgressBarSection={
    [
      RHAP_UI.CURRENT_TIME,
      RHAP_UI.PROGRESS_BAR,
      RHAP_UI.DURATION,
    ]
    }
    customIcons={CustomIcons}
  />
);

export default Player;
