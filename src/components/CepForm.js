import React, { Component } from 'react';
import './CepForm.css';

class CepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    window.hancleCepRequest = this.hancleCepRequest.bind(this);
  }

  handleChange(event) {
    this.setState({
      cep: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const jsonp = `https://viacep.com.br/ws/${this.state.cep.replace('-', '')}/json/?callback=hancleCepRequest`;
    const script = document.createElement('script');
    script.src = jsonp;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  hancleCepRequest(cepInfo) {
    this.props.onSubmit(cepInfo);
  }

  render() {
    return (
      <form className="cep-form" onSubmit={this.handleSubmit}>
        <h3>Consultar</h3>
        <fieldset>
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            // pattern="/[0-9]{5}-[0-9]{3}/"
            // required
            placeholder="99999-999"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" className="form-btn" value="Buscar" />
        </fieldset>
      </form>
    );
  }
}

export default CepForm;
