import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet,ImageBackground, AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './src/navigations/MainStack';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';



const Stack = createNativeStackNavigator();


const App = () => {

    const AllStacks =()=>{

      return(
        <Stack.Navigator
          screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
      )
    }


  return (

  <Provider store={Store}>
    <NavigationContainer>
        <AllStacks/>
    </NavigationContainer>
    </Provider>
  );
 

};


export default App;
