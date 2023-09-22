import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Header() {
  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.headerLogo} source={require('./logo.png')} />
        <Text style={styles.headerTitle}>design</Text>
        <Text style={styles.headerSubTitle}>particle</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  headerLogo: {
    marginTop: 100,
    height: 100,
    width: 100,
  },

  headerTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 45,
  },

  headerSubTitle: {
    textTransform: 'uppercase',
    letterSpacing: 5,
    fontSize: 16,
  },
})
