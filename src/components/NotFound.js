import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">404 - Página não encontrada</h1>
        </header>
        <p className="App-intro">
          <Link to="/" className="start-btn">Início</Link>
        </p>
      </div>
    );
  }
}

export default NotFound;
