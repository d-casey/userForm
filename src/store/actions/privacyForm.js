import {
  SUBMIT_PRIVACY_FORM,
  RESET_PRIVACY_FORM
} from '../constants/actions'

export const submitPrivacyForm = formFields => ({
  type: SUBMIT_PRIVACY_FORM,
  payload: formFields
})

export const resetPrivacyForm = () => ({
  type: RESET_PRIVACY_FORM
})
