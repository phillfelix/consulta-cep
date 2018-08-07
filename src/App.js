import React, { Component } from 'react';
import './App.css';
import CepForm from './components/CepForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Consulta de endereço</h1>
        </header>
        <CepForm />
      </div>
    );
  }
}

export default App;
