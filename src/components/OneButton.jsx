import '@babel/polyfill';
import React from 'react';

export default class OneButton extends React.Component {
  render() {
    const {handleClick, stateCamera} = this.props;
    let text;
    let className;
    if ( stateCamera === 'CLOSED') {
      className = 'btn btn-primary btn-block mt-3';
      text = 'Open camera';
    }
    if ( stateCamera === 'OPEN') {
      className = "btn btn-success btn-block mt-3";
      text = "Capture";
    }
    return (
      <button onClick={handleClick} type="button" className={className}>{text}</button>
    )
  }
}