import { combineReducers } from 'redux'
import newUserForm from './newUserForm'
import privacyForm from './privacyForm'

const rootReducer = combineReducers({
  newUserForm,
  privacyForm
})

export default rootReducer
