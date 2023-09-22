import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  View,
  StatusBar as ReactStatus,
} from "react-native";
import ListaTareas from "./src/components/Tarea2";
import { useEffect } from "react";
import CharactersScrean from "./src/components/CustomUseEffect";



export default function App() {

  return (        
    <View style={styles.container}>
      <CharactersScrean></CharactersScrean>
      {/*<ListaTareas></ListaTareas>*/}
      <StatusBar style="auto" />
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
    backgroundColor: "#90AFC5",

  },
});
