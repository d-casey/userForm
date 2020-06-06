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

export default function newUserForm(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_NEW_USER_FORM:
      return {
        ...state,
        name: action.payload.name,
        role: action.payload.role,
        email: action.payload.email,
        password: action.payload.password,
        isSubmitted: true
      }

    case RESET_USER_FORM:
      return {
        ...state,
        name: "",
        role: "",
        email: "",
        password: "",
        isSubmitted: false
      }

    default:
      return state
  }
}
