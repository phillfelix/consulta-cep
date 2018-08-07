import React, { Component } from 'react';
import './Address.css';
import Map from './Map';
import closeIcon from './close-icon.svg';

class Address extends Component {
  render() {
    return (
      <div className="address">
        <button className="close-btn" onClick={this.props.onClose}>
          <img src={closeIcon} alt="Fechar"/>
        </button>
        <h3>{this.props.address.logradouro}</h3>
        <p>{this.props.address.bairro}</p>
        <p>
          {this.props.address.localidade} - {this.props.address.uf}<br/>
          {this.props.address.cep}
        </p>
        <Map address={this.props.address} />
      </div>
    )
  }
}

export default Address;
