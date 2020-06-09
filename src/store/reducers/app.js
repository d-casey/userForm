import {
  UPDATE_STAGE,
  RESET_FORM_STAGE
} from '../constants/actions'

const initialState = {
  stage: 0
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

    default:
      return state
  }
}
