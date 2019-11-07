import '@babel/polyfill';
import React from 'react';

export default class VideoBox extends React.Component {
  render() {
    const {stateCamera} = this.props;
    let faceFigure = '';
    if ( stateCamera === 'OPEN') {
      const styleFigure = {
        position: "absolute",
        borderTop: "0px",
        border: "2px solid green",
        borderRadius: "50% 50% 50% 50% / 40% 40%  60% 60%",
        bottom: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "35%",
        height: "75%",    
      }
      faceFigure = <div style={styleFigure}></div>
    }

    return (
      <div className="embed-responsive-item">
        <video className="rounded" id="video" style={{backgroundColor: "gray"}}></video>
        {faceFigure}
      </div>
    )
  }
}