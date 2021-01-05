import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../styles/globals.scss';
import { makeLogin } from '../factories/pages/login-factory';
import Home from '@/presentation/pages/home/home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Home}/>
    </Switch>
    </BrowserRouter>
  )

}

export default Router;