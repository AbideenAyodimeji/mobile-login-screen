import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Section = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.balance}>
        <View style={styles.mainBalance}>
          <Text style={styles.mainB}>main balance</Text>
          <Text style={styles.amount}>#000</Text>
          <TouchableOpacity>
            <Text style={styles.naira}>NGN</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.withTrans}>
        <TouchableOpacity style={styles.withBox}>
          <Text style={styles.withdraw}>withdraw</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.transBox}>
          <Text style={styles.transfer}>transfer</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.set2FA}>
        <View style={styles.box}></View>
        <View>
          <Text style={styles.set2FaMain}>Set up 2FA</Text>
          <Text style={styles.set2FaSub}>
            2FA Authentication ensures extra protection for your account
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },

  balance: {
    backgroundColor: 'lightblue',
    height: '40%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
  },

  mainBalance: {
    backgroundColor: 'blue',
    color: 'white',
    height: '100%',
    width: '80%',
    borderRadius: 10,
  },

  mainB: {
    color: '#fff',
    marginHorizontal: 30,
    marginVertical: 20,
    fontSize: 16,
    textTransform: 'capitalize',
  },
  amount: {
    color: '#fff',
    marginHorizontal: 30,
    fontSize: 16,
  },
  naira: {
    marginHorizontal: 30,
    color: 'green',
    marginTop: 40,
    backgroundColor: 'lightgreen',
    padding: 5,
    borderRadius: 20,
    width: 80,
    textAlign: 'center',
  },

  withTrans: {
    marginTop: 20,
    flexDirection: 'row',
  },

  withBox: {
    backgroundColor: 'green',
    paddingVertical: 25,
    width: '47.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 7.5,
  },

  transBox: {
    backgroundColor: '#aaa',
    paddingVertical: 25,
    width: '47.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 7.5,
  },

  withdraw: {
    textTransform: 'capitalize',
    color: '#fff',
    fontSize: 18,
  },

  transfer: {
    textTransform: 'capitalize',
    color: '#fff',
    fontSize: 18,
  },

  set2FA: {
    marginTop: 20,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
  },

  box: {
    height: 45,
    width: 35,
    backgroundColor: 'pink',
    marginLeft: 15,
    marginRight: 10,
    borderRadius: 5,
  },

  set2FaMain: {
    marginTop: 10,
  },

  set2FaSub: {
    marginBottom: 10,
    paddingRight: 100,
    color: '#aaa',
  },
})

export default Section
