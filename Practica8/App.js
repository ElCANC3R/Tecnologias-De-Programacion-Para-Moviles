import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AppContextProvider } from "./src/context/AppContext";
import Navegador from "./src/Components/Screens/Tarea8-9/NavegadorPantallas";
import ScreenTeclado from "./src/Components/Screens/Tarea8-9/ScreenTeclado";
import Constants from "expo-constants";

export default function App() {
  return (
    <AppContextProvider>
        <View style={styles.container}>
          <ScreenTeclado />
          <StatusBar style="auto" />
        </View>
     
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
