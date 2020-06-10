import {
  UPDATE_USER_FIELDS,
  RESET_USER_FORM
} from '../constants/actions'

export const initialState = {
  name: "",
  role: "",
  email: "",
  password: "",
  isSubmitted: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_FIELDS:
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
