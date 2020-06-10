import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import User from '../../containers/UserForm'
import Privacy from '../../containers/PrivacyForm'
import Done from '../../containers/Done'
import PageNotFound from '../../components/PageNotFound'

const FormSwitcher = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/' component={User} exact />
          <Route path='/privacy' component={Privacy} exact />
          <Route path='/done' component={Done} exact />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default FormSwitcher
