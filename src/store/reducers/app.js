import {
  UPDATE_STAGE,
  RESET_FORM_STAGE,
  SET_FORM_COMPLETION,
  RESET_APP
} from '../constants/actions'

const initialState = {
  stage: 0,
  formCompleted: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STAGE:
      return {
        ...state,
        stage: action.payload.stage,
      }

    case RESET_FORM_STAGE:
      return {
        ...state,
        stage: 0
      }

    case SET_FORM_COMPLETION:
      return {
        ...state,
        formCompleted: true
      }

    case RESET_APP:
      return {
        ...state,
        formCompleted: false,
        stage: 0
      }

    default:
      return state
  }
}
