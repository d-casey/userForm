import React from 'react'
import { createStore } from 'redux'
import { render, screen, fireEvent, act } from '../../testUtils'
import '@testing-library/jest-dom/extend-expect'
import UserForm from '.'
import * as userFormActions from '../../store/actions/newUserForm'

/*
  Learned a harsh lesson that react-hook-form is not easy to write tests for. It works really well, but trying to submit it and assert
  the dispatch function was called should have been simple. It really was not.
*/
describe('Rendering the initial user form', () => {
  const store = createStore(() => ({
    app: {
      stage: 0,
      formCompleted: false
    },
    newUserForm: {
      name: 'Viktor Krum',
      role: 'Seeker',
      email: 'trailofkrums@durmstrang.com',
      password: 'Password123245',
      isSubmitted: false
    },
    privacyForm : {
      isSubmitted: false,
      receive_updates: true,
      receive_communication: false,
    }
  }))

  beforeEach(() => {
    store.dispatch = jest.fn()
    render(<UserForm />, { store })
  })

  it('loads all the input fields', () => {
    const inputFields = screen.getAllByTestId(/user_/)
    expect(inputFields).toHaveLength(4)
  })

  it('uses the state values if they are present for name', () => {
    const nameInput = screen.getByTestId('user_name')
    expect(nameInput.value).toEqual('Viktor Krum')
  })

  it('uses the state values if they are present for role', () => {
    const roleInput = screen.getByTestId('user_role')
    expect(roleInput.value).toEqual('Seeker')
  })

  it('uses the state values if they are present for email', () => {
    const emailInput = screen.getByTestId('user_email')
    expect(emailInput.value).toEqual('trailofkrums@durmstrang.com')
  })

  it('does not use the state value for password', () => {
    const passwordInput = screen.getByTestId('user_password')
    expect(passwordInput.value).toEqual('')
  })
})
