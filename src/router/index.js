import React from 'react';
import Countries from "../components/Countries";
import Newes from "../pages/newes";
import { Route, Switch } from "react-router-dom";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Countries} />
      <Route exact path="/newes" component={Newes} />
    </Switch>
  );
};