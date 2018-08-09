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
  head.appendChild.mockImplementation((arg) => scriptSrc = arg.src);

  wrapper.setState({
    cep: '02030-000'
  });
  wrapper.find('.cep-form').first().simulate('submit');

  expect(head.appendChild).toHaveBeenCalled();
  expect(scriptSrc).toMatch('https://viacep.com.br/ws/02030000/json/?callback=handleCepRequest');
});
