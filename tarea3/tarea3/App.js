import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from './src/components/newText/customText';
import CustomButton from './src/components/customButton/customButton';

export default function App() {

  const handleButtonPress = () => {
    console.log('Botón presionado');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rukia tiene el mejor bankai de Bleach!</Text>
      <CustomText style={styles.customTextStyle}> El  texto esta personalizado</CustomText>
      <CustomText >
        Habia una vez un pez que salio a tierra y se ahogo.FIN.
      </CustomText>
      <CustomButton
        title="Presionar"
        onPress={handleButtonPress}
        buttonStyle={styles.customButtonStyle}
        textStyle={styles.customButtonTextStyle}
        imageSource={require('./src/images/Rukia.jpg')}
      />
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
      color : 'red',
      fontSize: 20,
  },
  customTextStyle: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 10,
  },

});
