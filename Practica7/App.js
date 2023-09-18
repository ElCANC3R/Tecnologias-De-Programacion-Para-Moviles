import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  Platform,
  TocuchableOpacity,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import WelcomeScreen from "./src/Screens/WelcomeScreen/index";
import Welcome from "./src/Screens/signIn/wellcome";
import SignIn from "./src/Screens/signIn/signIn";
import CreateAcount from "./src/Screens/signIn/createAcount";
import { FlatList, TextInput } from "react-native-web";
import Todo from "./src/Components/todo";
import CustomButton from "./src/Components/CustomButton";


export default function App() {
const [inputValue, setInputValue] = useStat('')
const [todos, setTodos] = useState([])

const handleAddTodo = () => {
  if(inputValue === ''){
    return
  }

  setTodos([
    ...todos,
    { id: Math.random(), 
      title: inputValue, 
      done: false },
  ])
  setInputValue('')
}

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}>Todo list</Text>
      <View style={styles.container2}>
        <TextInput 
        style={{ borderWidth: 1, borderColor: "black", margin: 10, padding: 10, fontSize: 20, height: 20 }}
         placeholder="Add todo"
         value={inputValue}
         onChangeText={(value) } />
        <CustomButton title="Add Task" onPress={handleAddTodo} />
      </View>
      <FlatList
        data={TODOS}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item: { title } }) => {
          return (
            <Todo title={title} />
          )
        }
        }
      />
      <StatusBar style="auto" />

      {/* <Main /> */}
      {/*<WelcomeScreen />*/}
      {/*<Welcome></Welcome>*/}
      {/*<SignIn></SignIn>*/}
      {/*<CreateAcount></CreateAcount>*/}
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
  container2: {
    flexDirection: "row", 
    marginTop: 20, 
    gap: 20 
  }
});
