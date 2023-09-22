import 'react-native-gesture-handler'
import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from './Authentication/Login'
import RegisterScreen from './Authentication/Register'
import DashBoard from './Authentication/DashBoard'
import WelcomeScreen from './Authentication/Welcome'
import Profile from './Authentication/profile'
import Services from './Authentication/services'
import About from './Authentication/about'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Dashsboard' component={DashBoard} />
      <Drawer.Screen name='About' component={About} />
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Services' component={Services} />
    </Drawer.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='DashBoard' component={DrawerNav} />
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
