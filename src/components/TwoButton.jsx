import '@babel/polyfill';
import React from 'react';

export default class TwoButton extends React.Component {
  render() {
    const {handleClick, stateCamera, photoListState} = this.props;
    let text;
    let className;
    if (stateCamera === 'OPEN') {
      text = 'Back';
      className = 'btn btn-dark btn-block mt-3';
    }
    if (stateCamera === 'CLOSED') {
      text = 'Clear history';
      className = photoListState.length > 0 ? 'btn btn-danger btn-block mt-3' : 'btn btn-danger btn-block mt-3 disabled';
    }
    return (
      <button onClick={handleClick} type="button" className={className}>{text}</button>
    )
  }
}