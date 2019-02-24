import * as React from 'react'
    
import { Router, Route, Switch } from 'dva/router'

import Home from './routes/Home'
import News from './routes/News'

export default function RouterConfig ({ history }){
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
      </Switch>
    </Router>
  )
}
