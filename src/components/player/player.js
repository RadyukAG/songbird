import React from 'react';
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player';
import { FaRegPlayCircle, FaRegPauseCircle } from 'react-icons/fa';
import 'react-h5-audio-player/lib/styles.css';
import './player.css';
import { roundEndSelector } from '../../common/store/selectors';
import store from '../../common/store/store';

const themeColor = '#3498DB';
const CustomIcons = {
  play: <FaRegPlayCircle fill={themeColor} />,
  pause: <FaRegPauseCircle fill={themeColor} />,
}
export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
    store.subscribe(() => {
      if (roundEndSelector() && this.player.current && this.player.current.audio.current) {
        this.player.current.audio.current.pause();
      }
    });
  }
  render() {
    if (!this.props.audio) {
      return null;
    }
    return (
    <AudioPlayer
      autoPlay={this.props.autoPlay}
      autoPlayAfterSrcChange={this.props.autoPlayAfterSrcChange}
      layout="horizontal-reverse"
      src={this.props.audio}
      showJumpControls={false}
      customProgressBarSection={
      [
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.DURATION,
      ]
      }
      customIcons={CustomIcons}
      ref={this.player}
    />
    );
  }


}
