import React from 'react';
import SearchAddress from './index';
import Address from '../Address';
import { shallow, mount } from 'enzyme';

const address = {
  "bairro":"Canindé",
  "cep":"02030-000",
  "localidade":"São Paulo",
  "logradouro":"Avenida Cruzeiro do Sul",
  "uf":"SP",
};
const error = {
  erro: 'Erro'
}

it('renders', () => {
  shallow(<SearchAddress />);
});

it('displays error message if address got an error', () => {
  const wrapper = mount(<SearchAddress />);
  wrapper.instance().updateAddress(error);
  wrapper.update();

  expect(wrapper.find('.error')).toHaveLength(1);
});

it('displays Address component if valid address', () => {
  const wrapper = mount(<SearchAddress />);
  wrapper.instance().updateAddress(address);
  wrapper.update();

  expect(wrapper.find(Address)).toHaveLength(1);
});

it('cleans output correctly', () => {
  const wrapper = mount(<SearchAddress />);
  wrapper.instance().updateAddress(address);
  wrapper.update();
  wrapper.instance().cleanAddress();
  wrapper.update();

  expect(wrapper.find(Address)).toHaveLength(0);
});
