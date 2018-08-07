import React, { Component } from 'react';
import './CepForm.css';
import InputMask from 'react-input-mask';

class CepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    window.handleCepRequest = this.handleCepRequest.bind(this);
  }

  handleChange(event) {
    this.setState({
      cep: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.isValidCep()) {
      const jsonp = `https://viacep.com.br/ws/${this.state.cep.replace('-', '')}/json/?callback=handleCepRequest`;
      const script = document.createElement('script');
      script.src = jsonp;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  }

  handleCepRequest(cepInfo) {
    this.props.onSubmit(cepInfo);
  }

  isValidCep() {
    const rx = /^[0-9]{5}-[0-9]{3}$/;
    return rx.test(this.state.cep);
  }

  render() {
    return (
      <form className="cep-form" onSubmit={this.handleSubmit}>
        <h3>Consultar</h3>
        <fieldset>
          <label htmlFor="cep">CEP</label>
          <InputMask
            mask="99999-999"
            name="cep"
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
