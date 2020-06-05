import {
  SUBMIT_PRIVACY_FORM
} from '../constants/actions'

const initialState = {
  receive_updates: true,
  receive_communication: false,
  isSubmitted: false
}

export default function newUserForm(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_PRIVACY_FORM:
    console.log('payload: ', action.payload)
      return {
        ...state,
        receive_updates: action.payload.receive_updates,
        receive_communication: action.payload.receive_communication,
        isSubmitted: true
      }

    default:
      return state
  }
}
