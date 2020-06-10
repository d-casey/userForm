import {
  RESET_PRIVACY_FORM,
  SUBMIT_PRIVACY_FORM
} from '../constants/actions'

import privacyForm from './privacyForm'

test('it updates the privacy form fields correctly', () => {
  expect(privacyForm({},
      {
        type: SUBMIT_PRIVACY_FORM,
        payload:
        [
          {
            name: 'receive_updates',
            defaultChecked: true,
            message: 'Receive Updates about Tray.io products by email'
          },
          {
            name: 'receive_communication',
            message: 'Receive communication by email for other products created by the Tray.io team Receive communication by email for other products created by the Tray.io team Receive communication by email for other products created by the Tray.io team'
          }
        ]
      }
    )
  )
  .toMatchSnapshot()
})

test('it resets the stage correctly', () => {
  expect(privacyForm({}, { type: RESET_PRIVACY_FORM })).toMatchSnapshot()
})

test('it returns the default state when nothing provided', () => {
  expect(privacyForm({}, { type: 'UNKNOWN' })).toMatchSnapshot()
})
