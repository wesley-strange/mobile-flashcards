import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard'
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import ErrorMessage from './components/ErrorMessage'
import CardDetails from './components/CardDetails'

export default function App() {
  return (
    <View style={styles.container}>
      <CardDetails />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
