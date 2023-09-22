import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Text>Hi, Abideen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
})

export default Header
