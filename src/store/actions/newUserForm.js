import {
  RESET_USER_FORM,
  SUBMIT_NEW_USER_FORM
} from '../constants/actions'

export const submitNewUserForm = formFields => ({
  type: SUBMIT_NEW_USER_FORM,
  payload: formFields
})

export const resetUserForm = () => ({
  type: RESET_USER_FORM
})
