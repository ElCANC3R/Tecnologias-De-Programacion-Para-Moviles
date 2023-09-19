import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Todo from "./src/components/Todo";
import { useState } from "react";
import CustomButton from "./src/components/CustomButton";
import TodoInput from "./src/components/TodoInput";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const createAlert = (text) => {
    Alert.alert("Error", text, [
      {
        text: "aceptar",
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
    ]);
  }

  const handleAddTodo = () => {
    if (inputValue === "") {
      return createAlert("El campo esta vacio");
    }
    if(todos.some(todo => todo.name.toLowerCase() === inputValue.toLowerCase)) {
      return createAlert('Ya existe una tarea con ese nombre') 
    }

    setTodos([
      ...todos,
      { id: todos.length + 1, name: inputValue, done: false },
    ]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    const filteredArray = todos.filter(todo => todo.id !== id);
    setTodos(filteredArray);
  }

  const handleCompeltedTodo = (id) => {
    const mappedArray = todos.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done;
        return ´{
          ...todo,
          isComplted
        }
      }
      return todo;
    }
    );
    setTodos(mappedArray);
  }



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.container2}>
          <TodoInput value={inputValue} onChangeText={setInputValue} />
          <CustomButton text={"Add"} onPress={handleAddTodo} light={true} color={"#00AB02"} />
        </View>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item: {id, name } }) => {
          return <Todo name={name}
          id={id}
          handleDelete={handleDeleteTodo}
          handleComplete={handleCompeltedTodo} />;
        }}
      />
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
    backgroundColor: "#E00302",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  container2: {
    flexDirection: "row",
    marginTop: 20,
    gap: 20,
    backgroundColor: "#F70A7D",
    height: 55,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 10
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 20,
    flex: 1,
    borderRadius: 5,
    height: 40,
  },
});
