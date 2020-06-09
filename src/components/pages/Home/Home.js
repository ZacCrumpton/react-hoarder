import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Link to='/stuff/12345678'View Stuff></Link>
        <Link to='/new'>New Item</Link>
      </div>
    );
  }
}

export default Home;
