import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Cart from './Pages/Cart';

export default function Routes() {
  // O exact que uso no Main é para ele rodar o main somente quando não houver outro nome de página em frente a /
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
