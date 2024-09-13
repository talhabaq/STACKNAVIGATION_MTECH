import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './navigation-screens/Home'
import About from './navigation-screens/About'
import SignIn from './navigation-screens/SignIn'
const Stack=createNativeStackNavigator()
const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name='SignIn' component={SignIn}  options={{headerShown:false}}/>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App
