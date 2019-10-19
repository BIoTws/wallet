import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main, Recive, Send } from "./../../pages"

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/recive" component={Recive} />
      <Route path="/send" component={Send} />
    </Switch>
  </BrowserRouter>
)