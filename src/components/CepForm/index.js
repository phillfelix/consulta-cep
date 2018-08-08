import React, { Component } from 'react';
import './CepForm.css';
import InputMask from 'react-input-mask';

class CepForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: ''
    };
    this.cepInput = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateCep = this.validateCep.bind(this);
    window.handleCepRequest = this.handleCepRequest.bind(this);
  }

  handleChange(event) {
    this.setState({
      cep: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.validateCep()) {
      const jsonp = `https://viacep.com.br/ws/${this.state.cep.replace('-', '')}/json/?callback=handleCepRequest`;
      const script = document.createElement('script');
      script.src = jsonp;
      document.getElementsByTagName('head')[0].appendChild(script);
      this.cepInput.blur();
    } else {
      this.props.onSubmit({
        erro: 'Preencha um CEP no formato 99999-999'
      })
    }
  }

  handleCepRequest(cepInfo) {
    if (cepInfo.erro) cepInfo.erro = "Endereço não encontrado"
    this.props.onSubmit(cepInfo);
  }

  isValidCep() {
    const rx = /^[0-9]{5}-[0-9]{3}$/;
    return rx.test(this.state.cep);
  }

  validateCep() {
    const valid = this.isValidCep();
    this.setState({
      cep: this.state.cep
    });
    return valid;
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
            value={this.state.cep}
            onChange={this.handleChange}
            onBlur={this.validateCep}
            inputRef={(r) => this.cepInput = r}
          />
          <input type="submit" className="form-btn" value="Buscar" />
        </fieldset>
      </form>
    );
  }
}

export default CepForm;
