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
  }

  handleChange(event) {
    this.setState({
      cep: event.target.value
    });
  }

  handleSubmit(event) {
    alert(`CEP = ${this.state.cep}`)
    event.preventDefault();
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
