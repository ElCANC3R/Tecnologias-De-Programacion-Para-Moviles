import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants";
import Examen from './src/Screens/examen/examen';

export default function App() {
  return (
    <View style={styles.container}>
      <Examen></Examen>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
  },
});
