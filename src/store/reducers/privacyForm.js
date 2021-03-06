import {
  RESET_PRIVACY_FORM,
  SUBMIT_PRIVACY_FORM
} from '../constants/actions'

import privacyForm from '../../config/privacyForm'

export let initialState = {
  isSubmitted: false
}

privacyForm.checkboxData.map((checkbox) => {
  return initialState[checkbox.name] = checkbox.defaultChecked || false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_PRIVACY_FORM:
      let submittedFields = {}
      Object.entries(action.payload).map((field) => {
        return submittedFields[field[0]] = field[1]
      })

      return {
        ...state,
        ...submittedFields,
        isSubmitted: true
      }

    case RESET_PRIVACY_FORM:
      return initialState

    default:
      return state
  }
}
