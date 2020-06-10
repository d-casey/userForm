import {
  RESET_FORM_STAGE,
  UPDATE_STAGE,
  LOGGING_DETAILS,
  SET_FORM_COMPLETION,
  RESET_APP
} from '../constants/actions'

import { resetUserForm, resetPrivacyForm } from '../../store/actions'

export const updateStage = stage => ({
  type: UPDATE_STAGE,
  payload: {
    stage
  }
})

export const resetFormStage = () => ({
  type: RESET_FORM_STAGE
})

export const resetAllForms = () => dispatch => {
  dispatch(resetUserForm())
  dispatch(resetPrivacyForm())
}

export const setFormCompletion = () => ({
  type: SET_FORM_COMPLETION
})

export const resetApp = () => ({
  type: RESET_APP
})

export const loggingDetails = () => ({
  type: LOGGING_DETAILS
})

export const logSubmittedFormDetails = (formDetails) => dispatch => {
  dispatch(loggingDetails())
  console.log('formDetails: ', formDetails)
  dispatch(resetAllForms())
  dispatch(setFormCompletion())
}
