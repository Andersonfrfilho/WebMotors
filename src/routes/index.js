import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Car from '../pages/Car';
import Motorbike from '../pages/MotorBike';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/car" />} />
      <Route path="/car" component={Car} />
      <Route path="/motorbike" component={Motorbike} />
    </Switch>
  );
}
