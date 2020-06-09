import {
  RESET_USER_FORM,
  UPDATE_USER_FIELDS
} from '../constants/actions'

import { updateStage } from '../actions'

export const updateUserFields = formFields => ({
  type: UPDATE_USER_FIELDS,
  payload: formFields
})

export const submitNewUserForm = formFields => dispatch => {
  dispatch(updateUserFields(formFields))
  dispatch(updateStage(1))
}

export const resetUserForm = () => ({
  type: RESET_USER_FORM
})
