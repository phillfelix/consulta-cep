import React, { Component } from 'react';
import './App.css';
import CepForm from './components/CepForm';
import Address from './components/Address';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      error: null
    };

    this.updateAddress   = this.updateAddress.bind(this);
    this.cleanAddress   = this.cleanAddress.bind(this);
  }

  updateAddress(address) {
    let state = {
      address: null,
      error: null
    };
    if(address.erro) {
      state.error = true
    } else {
      state.address = address;
    }
    this.setState(state);
  }

  cleanAddress() {
    this.setState({
      address: null,
      error: null
    });
  }

  render() {
    let showMap;
    if(this.state.address) {
      showMap = <Address address={this.state.address} onClose={this.cleanAddress}/>;
    }  else if(this.state.error){
      showMap = <p className="error">Endereço não encontrado</p>
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Consulta de endereço</h1>
        </header>
        <CepForm onSubmit={this.updateAddress}/>
        {showMap}
      </div>
    );
  }
}

export default App;
