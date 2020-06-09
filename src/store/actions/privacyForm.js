import {
  SUBMIT_PRIVACY_FORM,
  RESET_PRIVACY_FORM
} from '../constants/actions'

import { updateStage } from '../actions'

export const updatePrivacyFields = formFields => ({
  type: SUBMIT_PRIVACY_FORM,
  payload: formFields
})

export const submitPrivacyForm = formFields => dispatch => {
  dispatch(updatePrivacyFields(formFields))
  dispatch(updateStage(2))
}

export const resetPrivacyForm = () => ({
  type: RESET_PRIVACY_FORM
})
