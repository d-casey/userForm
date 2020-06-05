import {
  SUBMIT_NEW_USER_FORM,
  SUBMIT_PRIVACY_FORM
} from '../constants/actions'

export const submitNewUserForm = formFields => ({ type: SUBMIT_NEW_USER_FORM, formFields })
export const submitPrivacyForm = formFields => ({ type: SUBMIT_PRIVACY_FORM, formFields })
