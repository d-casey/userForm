import React from 'react'
import { createStore } from 'redux'
import { render, screen, fireEvent, act } from '../../testUtils'
import '@testing-library/jest-dom/extend-expect'
import PrivacyForm from '.'
import * as privacyFormActions from '../../store/actions/privacyForm'
import { Router } from 'react-router-dom';

let historyMock
describe('Rendering the privacy form', () => {
  const store = createStore(() => ({
    app: {
      stage: 1,
      formCompleted: false
    },
    newUserForm: {
      name: 'Albus',
      role: 'Supreme Mugwump',
      email: 'DumbleD@owlmail.com',
      password: 'SherbhertL3monz',
      isSubmitted: true
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

  test('loads all checkboxes', () => {
    const checkboxes = screen.getAllByTestId(/receive_/)
    expect(checkboxes).toHaveLength(2)
  })

  it('has the receive updates checkbox as checked initially', () => {
    expect(screen.getByText('Receive Updates about Tray.io products by email')).toBeTruthy()
    expect(screen.getByTestId('receive_updates').checked).toEqual(true)
  })

  it('displays the receive communication checkbox which is initiallu unchecked', () => {
    expect(screen.getByText('Receive communication by email for other products created by the Tray.io team Receive communication by email for other products created by the Tray.io team Receive communication by email for other products created by the Tray.io team')).toBeTruthy()
    expect(screen.getByTestId('receive_communication').checked).toEqual(false)
  })

  it('displays the submit button', () => {
    expect(screen.getByTestId('privacy-form-submit-button')).toHaveTextContent('Submit')
  })

  test('when the submit button is clicked', async () => {
    privacyFormActions.submitPrivacyForm = jest.fn(() => 'SUBMIT_PRIVACY_FORM')
    await act(async () => {
      await fireEvent.click(screen.getByTestId('privacy-form-submit-button'))
    })

    expect(store.dispatch).toHaveBeenCalledWith('SUBMIT_PRIVACY_FORM')
    expect(historyMock.push.mock.calls[0][0]).toEqual('/done')
  })
})
