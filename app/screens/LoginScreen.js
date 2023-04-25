import React, { useState } from 'react'
import { View,Text,TextInput,StyleSheet,ScrollView } from 'react-native'
import { Formik } from 'formik';
import Screen from './Screen';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import CustomTextButton from '../components/CustomTextButton';
import authApi from '../api/authentication';

 const LoginScreen = ({children,navigation})=> {
     const [loginFailed,setLoginFailed] = useState(false);

    const handleSubmit = async ({username,password}) => {
        const result = await authApi.login(username,password);
        if(!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        console.log(result.data);
    }
    return (
        <Screen>
         <ScrollView style={styles.scrollview}>
            <View style={styles.upperContainer}>
                <Text style={styles.dataloc}>eDir</Text>
            </View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.welcomeText}>Login again!</Text>
            <View style={styles.middleContainer}>
            <Formik 
            initialValues = {{email: '', password: ''}}
            onSubmit={handleSubmit}
            
            >
                {({handleChange,handleSubmit})=>(
            <>
            <CustomTextInput 
              placeholder = 'Email' 
              autoCapitalize = "none"
              textContentType = "emailAddress"
              keyboardType = "email-address"
              onChangeText = {handleChange("email")}
              />
              <CustomTextInput 
              placeholder = 'Password' 
              autoCapitalize = "none"
              autoCorrect = {false}
              secureTextEntry={true}
              textContentType = "password"
              onChangeText={handleChange("password")}
               />

              <CustomButton 
              title="Login"  
              onPress={handleSubmit}/>
              </>
                )}
              
            </Formik>
            </View>
            <View style={styles.bottomOuterContainer}>
            <CustomTextButton title="Forgot password?"/>
            <View style={styles.bottomContainer}>
                <Text style={styles.askingUserQuestion}>Don't have an account?</Text>
                <CustomTextButton onPress={()=>navigation.navigate('register')} title="Create Account" />
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