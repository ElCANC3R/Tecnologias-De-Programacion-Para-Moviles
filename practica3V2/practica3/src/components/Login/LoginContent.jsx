
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';
import { THEME } from '../../theme/colors';
import { facebookImage, googleImage } from '../../../assets';
import ImageButton from '../images/imageComponent';

export default function LoginContent() {

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} value="diejoruiz1993@gmail.com" />
        <TextInput style={styles.input} secureTextEntry={true} />
        <Text style={styles.text} >Forgot your password?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <View style={styles.line}></View>
          <Text style={{ fontWeight: 'bold' }}>or login with</Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.buttons}>
          <ImageButton source={googleImage} texto="Google"></ImageButton>
          <ImageButton source={facebookImage} texto="Facebook"></ImageButton>
        </View>
        <View style={{ flexDirection: 'row', paddingTop: 50, justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Don't have an account?</Text>
          <Text style={styles.text2} >Register</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    paddingHorizontal: 40,
    borderColor: THEME.COLORS.Light_Gray,
    fontSize: 17,
    fontWeight: 'bold',
  },
  text: {
    color: THEME.COLORS.Light_Green,
    fontSize: 16,
    fontWeight: 'bold',
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
    borderBottomColor: 'gray',
    flex: 1,
    marginBottom: 8,

  },
  buttons: {
    flexDirection: 'row'

  },
  text2: {
    color: THEME.COLORS.Light_Green,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingLeft: 10,
  },

});