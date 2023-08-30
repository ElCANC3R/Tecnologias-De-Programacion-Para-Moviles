import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function LoginHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Sing in to your </Text>
      <Text style={styles.text}>Account</Text>
      <Text style={styles.text2}>Sing in to your acount</Text>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    
    justifyContent: 'center',
    height: (windowHeight/3) ,
    width: windowWidth,
  },
  text: {
    color: 'white',
    fontSize: 40,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  text2: {
    color: 'white',
    fontSize: 10,
    paddingLeft: 20,
    paddingTop: 20,
  }

});