// App.js or index.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './LogininScreen/Login';
import Signup from './SignUpScreen/Signup';
import PaymentScreen from './PaymentScreen/Payment';
import Home from './HomeScreen/Home';
import Profile from './ProfileScreen/Profile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Payment" component={PaymentScreen}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Profile}/>
       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;