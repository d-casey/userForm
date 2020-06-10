import * as appActions from './app'
import * as newUserFormActions from './newUserForm'

describe('newUserForm actions', () => {
  describe('updateUserFields', () => {
    it('sends the form fields as the payload', () => {
      expect(newUserFormActions.updateUserFields({ formFields: {} })).toMatchSnapshot()
    })
  })

  describe('resetUserForm', () => {
    it('sends the resetUserForm actions', () => {
      expect(newUserFormActions.resetUserForm()).toMatchSnapshot()
    })
  })

  describe('submitNewUserForm', () => {
    let dispatch, formFields
    beforeEach(() => {
      dispatch = jest.fn()
      formFields = 'FORM'
      newUserFormActions.submitNewUserForm(formFields)(dispatch)
    })

    test('it calls dispatch two times', () => {
      expect(dispatch).toHaveBeenCalledTimes(2)
    })

    it('calls dispatch with the updateUserFields action', () => {
      expect(dispatch).toBeCalledWith({'payload': 'FORM', 'type': 'UPDATE_USER_FIELDS'})
    })

    it('calls dispatch to update the stage', () => {
      expect(dispatch).toBeCalledWith({'payload': {'stage': 1}, 'type': 'UPDATE_STAGE'})
    })
  })
})
