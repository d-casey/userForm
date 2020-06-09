import { combineReducers } from 'redux'
import app from './app'
import newUserForm from './newUserForm'
import privacyForm from './privacyForm'

const rootReducer = combineReducers({
  app,
  newUserForm,
  privacyForm
})

export default rootReducer
