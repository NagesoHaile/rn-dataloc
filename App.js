import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegistrationScreen from './app/screens/RegistrationScreen';



export default function App() {
  return (
    <>
      <LoginScreen />
      <StatusBar style='auto' />
    </>
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
