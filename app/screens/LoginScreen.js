import { View,Text,TextInput,StyleSheet,ScrollView } from 'react-native'
import Screen from './Screen';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import CustomTextButton from '../components/CustomTextButton';

const LoginScreen = ({children})=> {
    return (
        <Screen>
         <ScrollView style={styles.scrollview}>
            <View style={styles.upperContainer}>
                <Text style={styles.dataloc}>eDir</Text>
            </View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.welcomeText}>Login again!</Text>
            <View style={styles.middleContainer}>
              <CustomTextInput placeholder = 'Email' />
              <CustomTextInput placeholder = 'Password' />

              <CustomButton title="Login" />
              
            </View>
            <View style={styles.bottomOuterContainer}>
            <CustomTextButton title="Forgot password?"/>
            <View style={styles.bottomContainer}>
                <Text style={styles.askingUserQuestion}>Don't have an account?</Text>
                <CustomTextButton title="Create Account" />
            </View>
            </View>
         </ScrollView>
        </Screen>
    )
  }

const styles = StyleSheet.create({
    askingUserQuestion: {
       fontWeight:'bold',
       fontSize:18,
    },
    bottomContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal:30,
        marginVertical:10,
    },
    bottomOuterContainer:{
        alignItems:'center'
    },
   dataloc: {
        color:'green',
        fontSize: 40,
        fontWeight:'bold',
        
    },
    middleContainer: {
        paddingHorizontal:20,

    },
    
    upperContainer: {
        flex:0.3,
        backgroundColor:'black',
        borderBottomLeftRadius:200,
        justifyContent:'center',
        alignItems:'center',
        padding:30
    },
    welcomeText: {
        color: 'green',
        fontSize: 24,
        fontWeight:'bold',
        padding: 20,
    },
    

    

    
})
export default LoginScreen;