import React from 'react';

import './SingleStuff.scss';

class SingleStuff extends React.Component {
  render() {
    const singleId = this.props.match.params.singleItemId;
    return (
      <div className="SingleStuff">
        <h1>Single Stuff</h1>
        <h2>The Item id is {singleId}</h2>
      </div>
    );
  }
}

export default SingleStuff;
