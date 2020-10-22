import React from 'react'
import { StyleSheet } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Dashboard from './Dashboard'
import AddDeck from './AddDeck'

const Tabs = createMaterialTopTabNavigator();

export default function Homepage() {
  return (
    <Tabs.Navigator style={styles.container}>
      <Tabs.Screen name="Decks" component={Dashboard} />
      <Tabs.Screen name="Add Deck" component={AddDeck} />
    </Tabs.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  }
})