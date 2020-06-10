import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheck)

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate persistor={store.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
