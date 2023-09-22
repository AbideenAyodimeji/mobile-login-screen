import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function Footer() {
  return (
    <View style={styles.footer}>
      <Text>Terms of use. Privacy policy</Text>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    marginTop: 60,
    alignItems: 'center',
  },
})
