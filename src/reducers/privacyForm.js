import {
  SUBMIT_PRIVACY_FORM
} from '../constants/actions'

const initialState = {
  checkboxes: [],
  isSubmitted: false
}

export default function newUserForm(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_PRIVACY_FORM:
      return {
        ...state,
        checkboxes: action.payload.checkboxes,
        isSubmitted: true
      }

    default:
      return state
  }
}
