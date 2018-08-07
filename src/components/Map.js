import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  buildSearchString() {
    let address = this.props.address;
    let q = `${address.logradouro}, ${address.localidade} - ${address.uf}, ${address.cep}`;
    return encodeURIComponent(q);
  }

  render() {
    const iframeSrc = `https://www.google.com/maps/embed/v1/search?q=${this.buildSearchString()}&key=AIzaSyAXJTjPOeY5duT8NFC3nabOuYZRlq_5Dt4`;

    return (
      <div className="map-wrapper">
        <iframe
          frameBorder="0"
          title="Veja o endereço no mapa"
          src={iframeSrc}
          allowFullScreen></iframe>
      </div>
    );
  }
}

export default Map;
