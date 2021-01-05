import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Router from '@/main/router/router';

import '../../styles/globals.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )

}

export default App;