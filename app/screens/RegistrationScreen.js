import { View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    StatusBar,} from 'react-native'
import Screen from './Screen';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import CustomTextButton from '../components/CustomTextButton';

const RegistrationScreen = ({children})=> {
    return (
        <Screen>
         <ScrollView contentContainerStyle={styles.scrollview}>
            <View style={styles.upperContainer}>
                <Text style={styles.dataloc}>Flowpy</Text>
            </View>
            <Text style={styles.welcomeText}>Welcome! Create new account.</Text>
            <View style={styles.middleContainer}>
              <CustomTextInput placeholder = 'First Name' />
              <CustomTextInput placeholder = 'Last Name' />
              <CustomTextInput placeholder = 'username' />
              <CustomTextInput placeholder = 'Email' />
              <CustomTextInput placeholder = 'Password' />
              <CustomTextInput placeholder = 'Confirm Password' />
              <CustomButton title="Signup" />
              
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.askingUserQuestion}>Already have an account?</Text>
                <CustomTextButton title="Login"/>
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
        padding:30,
    },
    welcomeText: {
        color: 'green',
        fontSize: 24,
        fontWeight:'bold',
        padding: 20,
    },
})

export default RegistrationScreen;