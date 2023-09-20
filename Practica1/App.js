import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  FlatList,
} from "react-native";
import Todo from "./src/components/Todo";
import CustomButton from "./src/components/CustomButton";
import TodoInput from "./src/components/TodoInput";
import { useTodos } from "./src/hooks/useTodos";


export default function App() {
  const { inputValue,
    setInputValue,
    todos,
    editando,
    nombreEditando,
    handleAddTodo,
    handleDeleteTodo,
    handleCompeltedTodo,
    handleEditTodo } = useTodos();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{editando ? "Editando tarea: "+nombreEditando: "Todo List" }</Text>
        <View style={styles.container2}>
          <TodoInput value={inputValue} onChangeText={setInputValue} />
          <CustomButton text={editando ? "Edit" : "Add"} onPress={handleAddTodo} light={true} color={"#00AB02"} />
        </View>
      </View>
      <FlatList
        style={{ marginBottom: 18, marginTop: 10 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item: {id, name, done, createdDate, edited } }) => {
          return <Todo name={name}
          id={id}
          handleDelete={handleDeleteTodo}
          handleComplete={handleCompeltedTodo} 
          done={done}
          createdDate={createdDate}
          handleEditTodo={handleEditTodo}
          edited={edited}
          />;
          
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
