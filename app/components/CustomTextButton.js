import { TouchableOpacity,Text,StyleSheet} from 'react-native';

const CustomTextButton = ({children,title,onPress})=> {
  return (
    <TouchableOpacity onPress={onPress}>
     <Text style={styles.textButton}>{title}</Text>
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