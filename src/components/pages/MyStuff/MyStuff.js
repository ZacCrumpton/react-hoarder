import React from 'react';

import './MyStuff.scss';

class MyStuff extends React.Component {
  editEvent = (e) => {
    const itemId = '12345';
    this.props.history.push(`/edit/${itemId}`);
  }

  singleEvent = (e) => {
    const singleItemId = '12345';
    this.props.history.push(`/single/${singleItemId}`);
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <button className="btn btn-dark" onClick={this.editEvent}>Edit Stuff</button>
        <button className="btn btn-dark" onClick={this.singleEvent}>Single Stuff</button>
      </div>
    );
  }
}

export default MyStuff;
