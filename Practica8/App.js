import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { AppContextProvider } from "./src/context/AppContext";
import Navegador from "./src/Components/Screens/Tarea8-9/NavegadorPantallas";
import ScreenTeclado from "./src/Components/Screens/Tarea8-9/ScreenTeclado";
import Constants from "expo-constants";
import { AuthContextProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthContextProvider>
    <AppContextProvider>
        <View style={styles.container}>
          <Navegador />
          <StatusBar style="auto" />
        </View>
    </AppContextProvider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
