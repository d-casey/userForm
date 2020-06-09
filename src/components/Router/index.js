import React from 'react'
import { Route, Switch } from 'react-router-dom'
import User from '../../containers/UserForm'
import Privacy from '../../containers/PrivacyForm'
import Done from '../../containers/Done'
import PageNotFound from '../../containers/PageNotFound'

const Router = () => {
  return (
    <div>
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
