import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image style={styles.image} source={require('./logo.png')} />
      </View>
      <View style={styles.title}>
        <Text style={styles.headerTitle}>design</Text>
        <Text style={styles.headerSubTitle}>particle</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    height: 80,
    width: 80,
  },

  headerTitle: {
    fontSize: 40,
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  headerSubTitle: {
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 5,
    marginTop: -8,
  },
})
