import * as appActions from './app'
import * as privacyFormActions from './privacyForm'

describe('privacyForm actions', () => {
  describe('updatePrivacyFields', () => {
    expect(privacyFormActions.updatePrivacyFields({ formFields: {} })).toMatchSnapshot()
  })

  describe('resetPrivacyForm', () => {
    it('sends the resetPrivacyForm action', () => {
      expect(privacyFormActions.resetPrivacyForm()).toMatchSnapshot()
    })
  })

  describe('submitPrivacyForm', () => {
    let dispatch, formFields
    beforeEach(() => {
      dispatch = jest.fn()
      formFields = 'FORM'
      privacyFormActions.submitPrivacyForm(formFields)(dispatch)
    })

    test('it calls dispatch two times', () => {
      expect(dispatch).toHaveBeenCalledTimes(2)
    })

    it('calls dispatch with the updatePrivacyFields action', () => {
      expect(dispatch).toBeCalledWith({'payload': 'FORM', 'type': 'SUBMIT_PRIVACY_FORM'})
    })

    it('calls dispatch to update the stage', () => {
      expect(dispatch).toBeCalledWith({'payload': {'stage': 2}, 'type': 'UPDATE_STAGE'})
    })
  })
})
