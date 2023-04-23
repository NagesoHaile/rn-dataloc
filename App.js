import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';

import {NavigationContainer} from  '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()


export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown:false
       }}
      >
         <Stack.Screen name="login" component={LoginScreen} />
         <Stack.Screen name = "register" component={RegistrationScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    color:'green',
    fontSize:30,
    fontWeight:'bold',
  },
 
});
