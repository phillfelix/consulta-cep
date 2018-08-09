import React from 'react';
import Home from './index';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Home />);
});
