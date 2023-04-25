import React from 'react'

import { View,Text,StyleSheet } from 'react-native';
import Screen from './Screen';


const AccountScreen = ()=>{
    return(
    <Screen>
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    }
})


export default AccountScreen;