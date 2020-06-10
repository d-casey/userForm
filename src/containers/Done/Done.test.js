import React from 'react'
import Done from '.'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { logSubmittedFormDetails } from '../../store/actions'

const mockStore = configureStore([])
let store
let component
let completionState = {
  app: {
    stage: 2,
    formCompleted: true
  },
  newUserForm: {
    name: "Severus Snape",
    role: "Potions Master",
    email: "thehalfbloodprince@owlmail.com",
    password: "ILoveP0tion5",
    isSubmitted: true
  },
  privacyForm : {
    isSubmitted: true,
    receive_updates: false,
    receive_communication: false,
  }
}

const getWrapper = () => {
  store = mockStore(completionState)
  component = renderer.create(
    <Provider store={store}>
      <Done />
    </Provider>
  )
}

describe('<Done /> container', () => {
  beforeEach(() => {
    getWrapper()
  })

  it('renders the success content as expected', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
