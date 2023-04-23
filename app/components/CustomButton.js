
import { TouchableOpacity,Text,StyleSheet } from 'react-native';

const CustomButton = ({children,...otherProps})=> {
  return (
    <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonTittle}>{otherProps.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    //button style
    button: {
        backgroundColor:'black',
        width:'100%',
        padding:15,
        borderRadius:12,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonTittle: {
        color:'green',
        fontSize:24,
        fontWeight:'bold',
    }
})
export default CustomButton;
