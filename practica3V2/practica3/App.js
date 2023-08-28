import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/login';

export default function App() {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  return (
    <View style={styles.container}>
      <Login></Login>
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
  input: {
    borderWidth: 1,
    width: 200,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'red'
  }
});
