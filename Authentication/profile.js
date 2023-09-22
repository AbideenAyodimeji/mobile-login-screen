import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Profile = () => {
  return (
    <View style={styles.Profile}>
      <Text>My Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Profile
