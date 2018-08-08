import React, { Component } from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Consulta de endereço</h1>
        </header>
        <p>
          <Link to="/consulta" className="start-btn">Iniciar</Link>
        </p>
      </div>
    )
  }
}

export default Home;
