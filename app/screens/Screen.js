import React from  'react';


import { View,SafeAreaView,Platform,StatusBar,StyleSheet} from 'react-native'

const Screen = ({children}) => {
    return (
      <SafeAreaView style={styles.screen}>
          {children}
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
    screen: {
        flex:1,
        paddingTop: StatusBar.currentHeight,
      },
})

export default Screen;