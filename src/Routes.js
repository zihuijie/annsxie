import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Contact, Home, NotFound, Services } from './containers';

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/services" exact component={Services} />
    <Route component={NotFound} />
  </Switch>;
