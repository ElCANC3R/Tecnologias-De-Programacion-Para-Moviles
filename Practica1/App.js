import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  FlatList,
  Modal,
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
    handleEditTodo,
    handleModal,
    modalVisible,
    //createModal,
    name,
    date,
    done,
    idGlobal
  } = useTodos();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{editando ? "Editando tarea: " + nombreEditando : "Todo List"}</Text>
        <View style={styles.container2}>
          <TodoInput value={inputValue} onChangeText={setInputValue} />
          <CustomButton text={editando ? "Edit" : "Add"} onPress={handleAddTodo} light={true} color={"#0F96AB"} />
        </View>
      </View>
      {modalVisible && 
      <Modal
      visible={modalVisible}
      animationType="slide" // Puedes especificar el tipo de animación de entrada/salida
      transparent={true}   // Hace que el fondo del modal sea transparente
      onRequestClose={() => {
        // Maneja la acción cuando el usuario intenta cerrar el modal (puede ser opcional)
        handleModal(idGlobal);
      }}
    >
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <Text style={styles.modalText}>{name}</Text>
              <Text style={styles.modalText}>{done ? "Estado de la tarea: Completada" : "Estado de la tarea: Sin compeltar"}</Text>
              <Text style={styles.modalText}>{date}</Text>
              <CustomButton text={"Close"} light={true} onPress={() => handleModal(idGlobal)} color={"#0F96AB"} />
          </View>
      </View>

    </Modal>
      }
      

      <FlatList
        style={{ marginBottom: 18, marginTop: 10 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, name, done, createdDate, edited } }) => {
          return <Todo name={name}
            id={id}
            handleDelete={handleDeleteTodo}
            handleComplete={handleCompeltedTodo}
            done={done}
            createdDate={createdDate}
            handleEditTodo={handleEditTodo}
            edited={edited}
            handleModal={handleModal}
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
    backgroundColor: "#90AFC5",

  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  container2: {
    flexDirection: "row",
    marginTop: 20,
    gap: 20,
    backgroundColor: "#2A3132",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    },
    modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
    },
    textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    },
    modalText: {
    marginBottom: 15,
    textAlign: "center"
    }
});
