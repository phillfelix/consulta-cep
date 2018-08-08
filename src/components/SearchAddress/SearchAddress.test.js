import React from 'react';
import ReactDOM from 'react-dom';
import SearchAddress from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchAddress />, div);
  ReactDOM.unmountComponentAtNode(div);
});
