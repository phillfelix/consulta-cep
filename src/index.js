import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import SearchAddress from './components/SearchAddress';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/consulta" component={SearchAddress} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
