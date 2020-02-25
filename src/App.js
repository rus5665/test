import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import MainNavigation from './navigation/MainNavigation'
import { store } from './store/configureStore'

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

export default App
