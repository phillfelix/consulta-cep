import React, { Component } from 'react';
import './App.css';
import CepForm from './components/CepForm';
import Address from './components/Address';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null
    };

    this.updateAddress   = this.updateAddress.bind(this);
    this.cleanAddress   = this.cleanAddress.bind(this);
  }

  updateAddress(address) {
    this.setState({
      address: address
    });
  }

  cleanAddress() {
    this.setState({
      address: null
    });
  }

  render() {
    let showMap;
    if(this.state.address) {
      showMap = <Address address={this.state.address} onClose={this.cleanAddress}/>;
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
