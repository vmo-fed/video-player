import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer  from '../build/VideoPlayer';
import './override.css';

class HelloMessage extends React.Component {
  render() {
    return (
      <VideoPlayer src="http://www.mediacollege.com/video-gallery/testclips/20051210-w50s_56K.flv" />
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage />, mountNode);
