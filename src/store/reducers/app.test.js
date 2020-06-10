import {
  UPDATE_STAGE,
  RESET_FORM_STAGE,
  SET_FORM_COMPLETION,
  RESET_APP
} from '../constants/actions'

import app from './app'

test('it updates the stage correctly', () => {
  expect(app({}, { type: UPDATE_STAGE, payload: { stage: 2 } })).toMatchSnapshot()
})

test('it resets the stage correctly', () => {
  expect(app({}, { type: RESET_FORM_STAGE })).toMatchSnapshot()
})

test('it sets the form to complete correctly', () => {
  expect(app({}, { type: SET_FORM_COMPLETION })).toMatchSnapshot()
})

test('it resets the app correctly', () => {
  expect(app({}, { type: RESET_APP })).toMatchSnapshot()
})


test('it returns the default state when nothing provided', () => {
  expect(app({}, { type: 'UNKNOWN' })).toMatchSnapshot()
})
