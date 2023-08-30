
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme/colors';

export default function LoginContent() {


  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput value="diejoruiz1993@gmaiul.com" />
        <TextInput secureTextEntry={true} />
        <Text style={styles.text} >Forgot your password?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{ FlexDirection: 'row', gap: 20 }}>
          <View style={styles.line}>  </View>
          <Text style={{ fontWeight: 'bold' }} >or login with</Text>
          <View style={styles.line}>  </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <Image style={styles.image} source={require('../../../assets/icon.png')} />
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.image} />
            <Text>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: (windowHeight / 3) * 2,
    width: windowWidth,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  form: {
    gap: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    height: 60,
    borderColor: THEME.COLORS.Light_Gray,
    fontSize: 17,
    font_WEIGHT: 'bold',
  },
  text: {
    color: THEME.COLORS.Light_Green,
    fontSize: 16,
    font_WEIGHT: 'bold',
    textAlign: 'right',
  },
  button: {
    backgroundColor: THEME.COLORS.Light_Green,
    borderRadius: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.COLORS.Dark_Blue,

  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.Light_Gray,
    marginBottom: 8,

  },
  buttons: {


  },
  
  image: {
    width: 50,
    height: 50,
  },


});