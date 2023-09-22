import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, 'Must be 2 characters or more')
    .required('firstName is Required'),
  userName: Yup.string()
    .min(3, 'Must be 3 characters or more')
    .required('userName is Required'),
  email: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('email is Required'),
  password: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .required('password is Required'),
  confirmPassword: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .required('password is Required'),
})

function Details({ navigation }) {
  const handleRegisterSubmit = () => {
    // console.log('working')
    return navigation.navigate('Welcome')
  }

  return (
    <View style={styles.details}>
      <Formik
        initialValues={{
          firstName: '',
          userName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleRegisterSubmit}
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
            <TextInput
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              value={values.firstName}
              style={styles.inputs}
              placeholder='First name'
              type='text'
            />
            <Text style={{ color: 'red' }}>
              {errors.firstName && touched.firstName && errors.firstName}
            </Text>

            <TextInput
              onChangeText={handleChange('userName')}
              onBlur={handleBlur('userName')}
              value={values.userName}
              style={styles.inputs}
              placeholder='Username'
              type='text'
            />
            <Text style={{ color: 'red' }}>
              {errors.userName && touched.userName && errors.userName}
            </Text>

            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.inputs}
              placeholder='Email'
              type='text'
            />
            <Text style={{ color: 'red' }}>
              {errors.email && touched.email && errors.email}
            </Text>

            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.inputs}
              placeholder='Password'
              type='text'
            />
            <Text style={{ color: 'red' }}>
              {errors.password && touched.password && errors.password}
            </Text>

            <TextInput
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              style={styles.inputs}
              placeholder='Confirm Password'
              type='text'
            />
            <Text style={{ color: 'red' }}>
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </Text>

            <View style={styles.condition}>
              <Pressable style={styles.click}></Pressable>
              <Text>I agree with terms and conditions</Text>
            </View>

            <TouchableOpacity style={styles.signUpBtn}>
              <Text style={styles.signUpText} onPress={handleSubmit}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <Text
        style={styles.existing}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Sign in
      </Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  details: {
    marginTop: 40,
  },

  inputs: {
    marginTop: 10,
    // marginBottom: 20,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },

  condition: {
    flexDirection: 'row',
    marginTop: 10,
  },

  click: {
    height: 17,
    width: 17,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 3,
    marginRight: 10,
  },

  signUpBtn: {
    backgroundColor: 'purple',
    marginTop: 50,
    marginHorizontal: 15,
  },
  signUpText: {
    textAlign: 'center',
    color: 'white',
    padding: 10,
  },

  existing: {
    marginTop: 25,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
})
