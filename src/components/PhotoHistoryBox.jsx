import '@babel/polyfill';
import React from 'react';

export default class PhotoHistoryBox extends React.Component {
  render() {
    const { photoListState } = this.props;
    const content = photoListState.map((elem) => <img key={elem} className="img-thumbnail img-responsive m-1" src={elem} />);
    const header = content.length > 0 ? <h2 className="display-8">History</h2> : '';
    return (
      <div className="container">
          {header}
          <div className="row mt-3">{content}</div>
        </div>
    )
  }
}