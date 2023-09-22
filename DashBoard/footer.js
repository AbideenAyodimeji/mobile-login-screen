import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Footer = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.logOut}
      onPress={() => {
        navigation.navigate('Login')
      }}
    >
      <Text style={styles.text}>logout</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  logOut: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: 30,
    borderRadius: 50,
    backgroundColor: 'brown',
  },

  text: {
    fontSize: 20,
    color: '#fff',
    letterSpacing: 2,
  },
})

export default Footer
