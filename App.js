import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

import Homepage from './components/Homepage'
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'
import ErrorMessage from './components/ErrorMessage'
import Quiz from './components/Quiz'

const Stack = createStackNavigator()
const store = createStore(reducer, middleware)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homepage} options={{headerShown:false}} />
          <Stack.Screen name="DeckDetails" component={DeckDetails} />        
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="ErrorMessage" component={ErrorMessage} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>    
  )
}
