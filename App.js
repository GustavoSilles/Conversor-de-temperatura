import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalculadorTemperatura from './src/components/CalculadorTemperatura';

export default function App() {

  return (
    <View style={styles.container}>
      <CalculadorTemperatura/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    
  }
})

