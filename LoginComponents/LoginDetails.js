import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Button,
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  userName: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .required('username is Required'),
  password: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .required('password is Required'),
})

export default function LoginDetails({ navigation }) {
  const handleFormSubmit = () => {
    return navigation.navigate('DashBoard')
  }

  return (
    <View>
      <Formik
        initialValues={{ userName: '', password: '' }}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <View style={styles.loginDetails}>
              <TextInput
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
                style={styles.userName}
                type='text'
                placeholder='enter username'
              />
              <Text style={{ color: 'red' }}>
                {errors.userName && touched.userName && errors.userName}
              </Text>

              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                style={styles.password}
                type='text'
                placeholder='enter password'
              />

              <Text style={{ color: 'red' }}>
                {errors.password && touched.password && errors.password}
              </Text>

              <View style={styles.flexLogin}>
                <View style={styles.flexLeft}>
                  <Pressable style={styles.tickBox}>
                    <Text></Text>
                  </Pressable>
                  <Text>Remember me</Text>
                </View>

                <View>
                  <Text>Forgot Password</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.Buttons} onPress={handleSubmit}>
                <Text style={styles.login}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.Buttons}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.signup}>Create an account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  loginDetails: {
    marginTop: 45,
  },

  userName: {
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#aaa',
    paddingBottom: 5,
  },

  password: {
    marginTop: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#aaa',
    paddingBottom: 5,
  },

  flexLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

  flexLeft: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tickBox: {
    marginRight: 8,
    height: 18,
    width: 18,
    borderWidth: 2,
    borderRadius: 3,
    borderRightColor: '#aaa',
    borderLeftColor: '#aaa',
    borderTopColor: '#aaa',
    borderBottomColor: '#aaa',
  },

  login: {
    marginTop: 25,
    marginHorizontal: 10,
    backgroundColor: 'purple',
    color: '#fff',
    paddingVertical: 9,
    marginBottom: 20,
    textAlign: 'center',
  },

  signup: {
    borderWidth: 1,
    paddingVertical: 8,
    marginHorizontal: 10,
    borderTopColor: '#aaa',
    borderBottomColor: '#aaa',
    borderRightColor: '#aaa',
    borderLeftColor: '#aaa',
    textAlign: 'center',
  },
})
