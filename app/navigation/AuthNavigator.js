import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = ()=> {
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Stack.Screen name='login' component={LoginScreen}/>
            <Stack.Screen name='register' component={RegistrationScreen} />
        </Stack.Navigator>
    )
}


export default AuthNavigator;