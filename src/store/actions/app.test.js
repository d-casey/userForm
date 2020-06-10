import * as appActions from './app'
import * as newUserFormActions from './newUserForm'
import * as privacyFormActions from './privacyForm'

describe('app actions', () => {
  describe('updateStage', () => {
    it('sends the stage as the payload', () => {
      expect(appActions.updateStage({ stage: 1 })).toMatchSnapshot()
    })
  })

  describe('resetFormStage', () => {
    it('sends the actions', () => {
      expect(appActions.resetFormStage()).toMatchSnapshot()
    })
  })

  describe('setFormCompletion', () => {
    it('sets the form completion', () => {
      expect(appActions.setFormCompletion()).toMatchSnapshot()
    })
  })

  describe('resetApp', () => {
    it('resets the app', () => {
      expect(appActions.resetApp()).toMatchSnapshot()
    })
  })

  describe('loggingDetails', () => {
    it('says that we are logging the details', () => {
      expect(appActions.loggingDetails()).toMatchSnapshot()
    })
  })

  describe('resetAllForms', () => {
    let dispatch
    beforeEach(() => {
      dispatch = jest.fn()
      newUserFormActions.resetUserForm = jest.fn(() => 'RESET_USER_FORM')
      privacyFormActions.resetPrivacyForm = jest.fn(() => 'RESET_PRIVACY_FORM')
      appActions.resetAllForms()(dispatch)
    })

    test('it calls dispatch two times', () => {
      expect(dispatch).toHaveBeenCalledTimes(2)
    })

    it('calls dispatch with the resetUserForm actions', () => {
      expect(dispatch).toBeCalledWith('RESET_USER_FORM')
    })

    it('calls dispatch with the resetPrivacyForm actions', () => {
      expect(dispatch).toBeCalledWith('RESET_PRIVACY_FORM')
    })
  })

  describe('logSubmittedFormDetails', () => {
    let dispatch
    let formDetails = 'FORM_DETAILS'
    beforeEach(() => {
      dispatch = jest.fn()
      jest.spyOn(global.console, 'log')
      appActions.logSubmittedFormDetails(formDetails)(dispatch)
    })

    test('it calls dispatch three times', () => {
      expect(dispatch).toHaveBeenCalledTimes(3)
    })

    it('calls dispatch with the loggingDetails actions', () => {
      expect(dispatch).toBeCalledWith({ 'type': 'LOGGING_DETAILS' })
    })

    it('calls console.log with the form details', () => {
      expect(console.log).toBeCalledWith('formDetails: ', 'FORM_DETAILS')
    })

    it('calls dispatch with the setFormCompletion actions', () => {
      expect(dispatch).toBeCalledWith({ 'type': 'SET_FORM_COMPLETION' })
    })
  })
})
