import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main, Recive, Send } from "./pages"

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
      <Route path="/recive" component={Recive} />
      <Route path="/Send" component={Send} />
    </Switch>
  </BrowserRouter>
)