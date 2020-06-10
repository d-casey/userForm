import {
  UPDATE_USER_FIELDS,
  RESET_USER_FORM
} from '../constants/actions'

import newUserForm from './newUserForm'

test('it updates the user fields correctly', () => {
  expect(newUserForm({},
      {
        type: UPDATE_USER_FIELDS,
        payload:
        {
          name: 'Severus Snape',
          role: 'Potions master',
          email: 'Sev@owlmail.com',
          password: 'Alw4ys',
          isSubmitted: true
        }
      }
    )
  )
  .toMatchSnapshot()
})

test('it resets the stage correctly', () => {
  expect(newUserForm({}, { type: RESET_USER_FORM })).toMatchSnapshot()
})

test('it returns the default state when nothing provided', () => {
  expect(newUserForm({}, { type: 'UNKNOWN' })).toMatchSnapshot()
})
