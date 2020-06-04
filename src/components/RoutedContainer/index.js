import React from 'react'
import { Route, Switch } from 'react-router-dom'
import User from '../../containers/User'
import Privacy from '../../containers/Privacy'
import Done from '../../containers/Done'
import PageNotFound from '../../containers/PageNotFound'

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
