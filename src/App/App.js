import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import Auth from '../components/pages/Auth/Auth';
import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import fbConnection from '../helpers/data/connection';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListner = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListner();
  }

  render() {
    return (
    <div className="App">
      <MyNavbar />
    <h1>React Hoarder</h1>
    <Auth />
  </div>
    );
  }
}

export default App;
