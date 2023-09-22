import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const About = () => {
  return (
    <View style={styles.profile}>
      <Text>About Us</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default About
