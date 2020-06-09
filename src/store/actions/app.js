import {
  RESET_FORM_STAGE,
  UPDATE_STAGE
} from '../constants/actions'

export const updateStage = stage => ({
  type: UPDATE_STAGE,
  payload: {
    stage
  }
})

export const resetFormStage = () => ({
  type: RESET_FORM_STAGE
})
