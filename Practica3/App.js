import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./src/screens/Calculator";
import Practica4 from "./src/screens/useMemo";

export default function App() {
  return (
    <View style={styles.container}>
      <Practica4 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
