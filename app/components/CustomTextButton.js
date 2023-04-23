import { TouchableOpacity,Text,StyleSheet} from 'react-native';

const CustomTextButton = ({children,...otherProps})=> {
  return (
    <TouchableOpacity>
     <Text style={styles.textButton}>{otherProps.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    textButton: {
        fontSize:20,
        fontWeight:'bold',
        color:'green',
        
    }
})

export default CustomTextButton;