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
import Welcome from "./src/Screens/signIn/wellcome";
import SignIn from "./src/Screens/signIn/signIn";
import CreateAcount from "./src/Screens/signIn/createAcount";

export default function App() {
  // console.log(Platform.OS);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Main /> */}
      {/*<WelcomeScreen />*/}
      {/*<Welcome></Welcome>*/}
      {/*<SignIn></SignIn>*/}
      <CreateAcount></CreateAcount>
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
