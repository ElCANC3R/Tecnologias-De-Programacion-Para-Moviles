import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  View,
  StatusBar as ReactStatus,
  SafeAreaView,
} from "react-native";
import ListaTareas from "./src/components/Tarea2";
import Constants from 'expo-constants';
import CharactersScrean from "./src/components/CharacterScrean.jsx";
import NavegarPantallas from "./src/components/Screens/NavegarPantallas";
import AppContextProvider from "./src/components/context/AppContext";



export default function App() {

  return (        
    <View style={styles.container}>
      {/*<CharactersScrean></CharactersScrean>*/}
      {/*<ListaTareas></ListaTareas>*/}
      {/*<NavegarPantallas></NavegarPantallas>*/}
      <AppContextProvider>
        <SafeAreaView >
          <CustomnCard></CustomnCard>
        </SafeAreaView>
      </AppContextProvider>
      <StatusBar style={{height: Constants.statusBarHeight}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    paddingTop: ReactStatus.currentHeight,
    
    // backgroundColor: "#98bcff",

  },
});
