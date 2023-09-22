import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  View,
  StatusBar as ReactStatus,
} from "react-native";
import ListaTareas from "./src/components/Tarea2";
import Constants from 'expo-constants';
import CharactersScrean from "./src/components/CharacterScrean.jsx";



export default function App() {

  return (        
    <View style={styles.container}>
      <CharactersScrean></CharactersScrean>
      {/*<ListaTareas></ListaTareas>*/}
      <StatusBar style={{height: Constants.statusBarHeight}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    paddingTop: ReactStatus.currentHeight,
    paddingHorizontal: 20,
    // backgroundColor: "#98bcff",
    backgroundColor: "#1D2027",

  },
});
