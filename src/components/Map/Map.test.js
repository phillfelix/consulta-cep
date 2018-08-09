import React from 'react';
import Map from './index';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Map address={{}}/>);
});

it('renders the iframe with the correct query', () => {
  const address = {
    "bairro":"Canindé",
    "cep":"02030-000",
    "localidade":"São Paulo",
    "logradouro":"Avenida Cruzeiro do Sul",
    "uf":"SP",
  };
  const expectedQueryString = "q=Avenida%20Cruzeiro%20do%20Sul%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002030-000";
  const wrapper = mount(<Map address={address}/>);
  const iframe = wrapper.find("iframe");
  expect(iframe.getDOMNode().src).toMatch(expectedQueryString);
});

