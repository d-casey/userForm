import {
  SUBMIT_NEW_USER_FORM,
  RESET_USER_FORM
} from '../constants/actions'

const initialState = {
  name: "",
  role: "",
  email: "",
  password: "",
  isSubmitted: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_NEW_USER_FORM:
      console.log('submitting new user form: ', action.payload)
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
        email: action.payload.email,
        password: action.payload.password,
        isSubmitted: true
      }

    case RESET_USER_FORM:
      return initialState

    default:
      return state
  }
}
