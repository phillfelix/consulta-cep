import React from 'react';
import NotFound from './index';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<NotFound />);
});
