import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

function AppNavigator() {

    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home"
         component={HomeScreen} options={{
         title: 'Home'
         }}/>

        <Stack.Screen name="Login" 
        component={LoginScreen} options=
        {{title: 'Login'
        }}/>
        
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Inicial",
          }}
        />

        </Stack.Navigator>
        </NavigationContainer>
        
    );
}

export default AppNavigator;