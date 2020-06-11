import React from 'react'
import { createStore } from 'redux'
import { render, screen, fireEvent, act } from '../../testUtils'
import '@testing-library/jest-dom/extend-expect'
import PrivacyForm from '.'
import * as userFormActions from '../../store/actions/newUserForm'
import { Router } from 'react-router-dom'

let historyMock
describe('Rendering the user form', () => {
  const store = createStore(() => ({
    app: {
      stage: 1,
      formCompleted: false
    },
    newUserForm: {
      name: 'Viktor Krum',
      role: 'Seeker',
      email: 'trailofkrums@durmstrang.com',
      password: 'Qu1dDitch123',
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
    historyMock = { push: jest.fn(), location: {}, listen: jest.fn() }
    render(<Router history={historyMock}><PrivacyForm /></Router>, { store })
  })

  it('loads all input', () => {
    const checkboxes = screen.getAllByTestId(/user_/)
    expect(checkboxes).toHaveLength(4)
  })

  it('displays the submit button', () => {
    expect(screen.getByTestId('user-form-submit-button')).toHaveTextContent('Next')
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

  it('does not display password even if there is a state value', () => {
    const passwordInput = screen.getByTestId('user_password')
    expect(passwordInput.value).toEqual('')
  })

  it('does not submit if required fields are missing, such as password', async () => {
    await act(async () => {
      await fireEvent.click(screen.getByTestId('user-form-submit-button'))
    })

    expect(store.dispatch).not.toHaveBeenCalled()
  })

  it('displays the required message if password was not submitted', async () => {
    await act(async () => {
      await fireEvent.click(screen.getByTestId('user-form-submit-button'))
    })

    const requiredErrors = await screen.findByText(/Required/)
    expect(requiredErrors).toBeTruthy()
  })

  it('displays the validation message if password was submitted with an unsupported value', async () => {
    const passwordInput = screen.getByTestId('user_password')
    await act(async () => {
      await fireEvent.change(passwordInput, { target: { value: 'badpass' } })
    })

    await act(async () => {
      await fireEvent.click(screen.getByTestId('user-form-submit-button'))
    })

    const requiredErrors = await screen.findByText(/Incorrect password format. Please see our password guide next to the form./)
    expect(requiredErrors).toBeTruthy()
  })

  test('clicking submit calls dispatch and pushes to privacy', async () => {
    userFormActions.submitNewUserForm = jest.fn(() => 'SUBMIT_USER_FORM')
    const passwordInput = screen.getByTestId('user_password')
    await act(async () => {
      await fireEvent.change(passwordInput, { target: { value: 'Qu1dDitch123' } })
    })
    await act(async () => {
      await fireEvent.click(screen.getByTestId('user-form-submit-button'))
    })

    expect(store.dispatch).toHaveBeenCalledWith('SUBMIT_USER_FORM')
    expect(historyMock.push.mock.calls[0][0]).toEqual('/privacy')
  })
})
