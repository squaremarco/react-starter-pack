/* eslint-disable react/prop-types */
import React from 'react';
import { Router } from '@reach/router';

import HelloWorld from 'Components/HelloWorld';

const Routes = () => (
  <Router>
    <HelloWorld default path="/" />
  </Router>
);

export default Routes;
