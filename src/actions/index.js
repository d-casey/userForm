import {
  UPDATE_STAGE,
  SUBMIT_NEW_USER_FORM,
  SUBMIT_PRIVACY_FORM,
  RESET_USER_FORM,
  RESET_PRIVACY_FORM,
  RESET_FORM_STAGE
} from '../constants/actions'

export const updateStage = stage => ({ type: UPDATE_STAGE, stage })
export const submitNewUserForm = formFields => ({ type: SUBMIT_NEW_USER_FORM, formFields })
export const submitPrivacyForm = formFields => ({ type: SUBMIT_PRIVACY_FORM, formFields })
export const resetUserForm = () => ({ type: RESET_USER_FORM })
export const resetPrivacyForm = () => ({ type: RESET_PRIVACY_FORM })
export const resetFormStage = () => ({ type: RESET_FORM_STAGE })
