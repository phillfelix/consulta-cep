import React from 'react';
import Address from './index';
import { shallow, mount } from 'enzyme';

const address = {
  "bairro":"Canindé",
  "cep":"02030-000",
  "localidade":"São Paulo",
  "logradouro":"Avenida Cruzeiro do Sul",
  "uf":"SP",
};

it('renders address info', () => {
  const wrapper = mount(<Address address={address} />);
  const div = wrapper.find('.address');
  for(let info in address) {
    expect(div.getDOMNode().innerHTML).toMatch(address[info]);
  }
});

it('emits onClose event', () => {
  const onClose = jest.fn();
  const wrapper = mount(<Address address={address} onClose={onClose}/>);
  wrapper.find('.close-btn').first().simulate('click');
  expect(onClose).toHaveBeenCalled();
});
