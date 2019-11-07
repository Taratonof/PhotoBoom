import '@babel/polyfill';
import React from 'react';
import VideoBox from './VideoBox.jsx';
import OneButton from './OneButton.jsx';
import TwoButton from './TwoButton.jsx';
import PhotoHistoryBox from './PhotoHistoryBox.jsx';

export default class Interface extends React.Component {
  state = {
    camera: 'CLOSED',
    photoList: [],
  };

  handleClickOneButton = (e) => {
    const {camera} = this.state;
    if (camera === 'CLOSED') {
      this.setState({ camera: 'OPEN',});
    }
    if (camera === 'OPEN') {
      const canvas = document.getElementById("canvas");
      const {photoList} = this.state;
      let context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, 160, 130);    
      let data = canvas.toDataURL('image/png');
      photoList.unshift(data);
      this.setState({ photoList: photoList });
      e.preventDefault();
    }
  }

  handleClickTwoButton = (e) => {
    const {camera} = this.state;
    if (camera === 'CLOSED') {
      this.setState({ photoList: [] });
      e.preventDefault();
    }
    if (camera === 'OPEN') {
      this.setState({camera: 'CLOSED'});
      e.preventDefault();
    }
  }

  render() {
    const { camera } = this.state;
    const video = document.getElementById("video");
    
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function(stream) {
            video.srcObject = stream;
            if (camera === 'OPEN'){
              video.play();
            }
        })
        .catch(function(err) {
            console.log("An error occurred: " + err);
        })

    return (
      <div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="embed-responsive embed-responsive-4by3 w-50 mt-5">
              <VideoBox stateCamera={camera} />
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-sm-2">
              <OneButton stateCamera={camera} handleClick={this.handleClickOneButton} />
            </div>
            <div className="col-sm-2">
              <TwoButton stateCamera={camera} handleClick={this.handleClickTwoButton} photoListState={this.state.photoList} />
            </div>
          </div>
        </div>
        <PhotoHistoryBox photoListState={this.state.photoList} />
      </div>
    )
  }
}