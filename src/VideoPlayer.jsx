import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import videojs from 'video.js';
import 'videojs-flash';
import 'video.js/dist/video-js.css';

const propTypes = {
  /** flv格式的视频地址 */
  src: PropTypes.string.isRequired,
  /** 播放器的宽度，默认为640 */
  width: PropTypes.string,
  /** 播放器的宽度，默认为268 */
  height: PropTypes.string
}

const defaultProps = {
  width: "640",
  height: "268"
}

class VideoPlayer extends Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, {
      flash: {
        swf: require('./video-js.swf')
      },
      sources: [{
        type: "video/flv",
        src: this.props.src
      }]
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render () {
    return (
      <div>
        <video ref={ node => this.videoNode = node } className="video-js vjs-default-skin" controls preload="auto" width={this.props.width} height={this.props.height} />
      </div>
    );
  }
}

VideoPlayer.propTypes = propTypes;
VideoPlayer.defaultProps = defaultProps;

export default VideoPlayer;
