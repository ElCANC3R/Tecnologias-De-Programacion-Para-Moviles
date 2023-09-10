import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import WelcomeScreen from "./src/Screens/WelcomeScreen/index";

export default function App() {
  // console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Main /> */}
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Platform.OS === "web" ? "black" : "white",
    // backgroundColor: Platform.select({
    //   ios: "blue",
    //   android: "red",
    //   web: "black",
    // }),
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight,
    // ...Platform.select({ web: { backgroundColor: "green" } }),
  },
});
