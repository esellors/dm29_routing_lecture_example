import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Link } from 'react-router-dom'
import {routes} from './routes';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my site!</h1>

      {/* <a href='/'>Home</a><br />
      <a href='https://google.com'>Google</a> */}

      <Link to='/'>Go Home</Link> <br />
      <Link to='/account'>View Account</Link> <br />
      <Link to='/account/profile'>View Profile</Link>

      {routes}

    </div>
  );
}

export default App;
