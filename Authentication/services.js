import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Services = () => {
  return (
    <View style={styles.services}>
      <Text>Our services</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  services: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Services
