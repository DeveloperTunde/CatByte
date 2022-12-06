import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import UserDetails from '../screens/UserDetails';

const Stack = createNativeStackNavigator();

const MainStack =()=> {
    return(
            <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="UserDetails" component={UserDetails} />

      </Stack.Navigator>
   
    )
}


export default MainStack;