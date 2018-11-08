import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Routers from '../router/index.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li>
            <Link to='/'>page1</Link>
           
            </li>
            <li>
            <Link to='/page2'>page2</Link>
            </li>
            <li>
            <Link to='/page3'>page3</Link>

            </li>
          </ul>
        </nav>
        {Routers}
      </div>
    );
  }
}

export default App;
