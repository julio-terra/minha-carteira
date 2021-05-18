import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import GlobalStyle from './styles/global';


import Appetizer from './pages/Appetizer';
import Dashboard from './pages/Dashboard';
import Exits from './pages/Exits';

import { BarProvider} from './hooks/bar';
import { AuthProvider } from './hooks/auth';

const App: React.FC = () => {
  return (
    <>
    <AuthProvider>
    <BarProvider>
    <Router>
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/entradas" component={Appetizer} />
        <Route exact path="/saidas" component={Exits} />
        </Switch>
        <GlobalStyle />
    </Router>
    </BarProvider >
    </AuthProvider>
      </>
  )
}

export default App;