import { View,StyleSheet,TextInput} from 'react-native';

import React from 'react'

const CustomTextInput = ({children, ...otherProps})=> {
  return (
    <View style={styles.textIputContainer}>
       <TextInput 
        placeholder={otherProps.placeholder} 
       cursorColor='green' 
       secureTextEntry={otherProps.secureTextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
    textIputContainer:{
        backgroundColor: '#F1F6F9',
        padding:15,
        borderRadius:15,
        marginVertical:10,
        borderWidth:1,
    }
})
export default CustomTextInput;