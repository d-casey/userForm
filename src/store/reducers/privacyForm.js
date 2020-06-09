import {
  RESET_PRIVACY_FORM,
  SUBMIT_PRIVACY_FORM
} from '../constants/actions'

const initialState = {
  receive_updates: true,
  receive_communication: false,
  isSubmitted: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PRIVACY_FORM:
      return {
        ...state,
        receive_updates: action.payload.receive_updates,
        receive_communication: action.payload.receive_communication,
        isSubmitted: true
      }

      case RESET_PRIVACY_FORM:
        return initialState

    default:
      return state
  }
}
