import React from 'react'
import { Route, Switch } from 'react-router-dom'
import User from '../../pages/User'
import Privacy from '../../pages/Privacy'
import Done from '../../pages/Done'
import PageNotFound from '../../pages/PageNotFound'

const Router = () => {
  return (
    <div className="form-container">
      <Switch>
          <Route path="/" component={User} exact />
          <Route path="/privacy" component={Privacy} />
          <Route path="/done" component={Done} />
          <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}

export default Router
