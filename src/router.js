import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import SecondPage from './routes/SecondPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Index" exact component={IndexPage} />
        <Route path="/" exact component={SecondPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
