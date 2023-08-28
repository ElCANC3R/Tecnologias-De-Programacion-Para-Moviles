
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function LoginContent() {


  return (
    <View style={styles.header}>
     
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: (windowHeight/3)*2 ,
    width: windowWidth,
  },

});