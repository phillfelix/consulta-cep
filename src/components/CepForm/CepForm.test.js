import React from 'react';
import CepForm from './index';
import { shallow, mount } from 'enzyme';

it('emits onSubmit event with an error when invalid cep input', () => {
  const onSubmit = jest.fn();
  const wrapper = mount(<CepForm onSubmit={onSubmit}/>);
  wrapper.find('.cep-form').first().simulate('submit');
  expect(onSubmit).toHaveBeenCalledWith({
    erro: 'Preencha um CEP no formato 99999-999'
  });
});

it('creates script tag when valid cep input', () => {
  const onSubmit = jest.fn();
  const wrapper = mount(<CepForm onSubmit={onSubmit}/>);
  const head = document.getElementsByTagName('head')[0];
  let scriptSrc;
  head.appendChild = jest.fn();
  head.appendChild.mockImplementation((el) => {
    scriptSrc = el.src;
  });

  wrapper.setState({
    cep: '02030-000'
  });
  wrapper.find('.cep-form').first().simulate('submit');

  expect(head.appendChild).toHaveBeenCalled();
  expect(scriptSrc).toMatch('https://viacep.com.br/ws/02030000/json/?callback=handleCepRequest');
});

it('calls onSubmit with retrieved data if callback function was called', () => {
  const onSubmit = jest.fn();
  const wrapper = mount(<CepForm onSubmit={onSubmit}/>);
  const head = document.getElementsByTagName('head')[0];
  const address = {
    "bairro":"Canindé",
    "cep":"02030-000",
    "localidade":"São Paulo",
    "logradouro":"Avenida Cruzeiro do Sul",
    "uf":"SP",
  };
  head.appendChild = jest.fn();
  head.appendChild.mockImplementation((el) => {
    window.handleCepRequest(address);
  });

  wrapper.setState({
    cep: '02030-000'
  });
  wrapper.find('.cep-form').first().simulate('submit');

  expect(onSubmit).toHaveBeenCalledWith(address);
});
