import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Registration successful, kindly click the link below to navigate to your
        dashboard
      </Text>
      <Text
        style={styles.linkToDashboard}
        onPress={() => navigation.navigate('DashBoard')}
      >
        My Dashboard
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: '60%',
  },

  linkToDashboard: {
    marginTop: 30,
    textDecorationLine: 'underline',
    textDecorationColor: 'red',
  },
})
