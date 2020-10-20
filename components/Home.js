import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Dashboard from './Dashboard'
import AddDeck from './AddDeck'

const Tabs = createMaterialTopTabNavigator();

export default function Homepage() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Decks" component={Dashboard} />
      <Tabs.Screen name="Add Deck" component={AddDeck} />
    </Tabs.Navigator>
  )
}