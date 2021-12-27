import React from 'react';
import logo from './logo.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit in <code>src/App.js</code> and save to reload.
        </p>
        <p><a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a></p>
          <p><a
          className="App-link"
          href="https://rubyonrails.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Ruby on Rails
        </a></p>
      </header>
    </div>
  );
}

export default App;
