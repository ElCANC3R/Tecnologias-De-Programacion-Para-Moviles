import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";

const Todo = ({ id, name, handleDelete, handleComplete, done, createdDate, handleEditTodo, edited }) => {

  const formatCreatedDate = (createdDate) => {
    const now = new Date();
    const taskDate = new Date(createdDate);
    const diffInDays = Math.floor(
      (now - taskDate) / (1000 * 60 * 60 * 24) // Diferencia en días
    );
  
    let dateText = "";
  
    if (diffInDays === 0) {
      dateText = `Today, ${taskDate.toLocaleTimeString()}`;
    } else if (diffInDays === 1) {
      dateText = `Yesterday, ${taskDate.toLocaleTimeString()}`;
    } else {
      dateText = `${taskDate.toLocaleDateString()}, ${taskDate.toLocaleTimeString()}`;
    }
  
    // Si ha pasado más de 5 días, cambia el color a "corallight"
    if (diffInDays > 5) {
      return <Text style={styles.corallight}>{edited ? "Edited " + dateText: dateText}</Text>;
    } else {
      return <Text style={styles.date}>{edited ? "Edited " + dateText: dateText}</Text>;
    }
  };


  return (
    <View style={[
      styles.container,
      done && styles.todoCompleted]}>
      <ScrollView style={{direction: "horizontal"}}>
      <View>
      <Text style={[{ fontSize: 20, fontWeight: "bold" }, done && styles.textCompleted]}>{name}</Text>
      {formatCreatedDate(createdDate)}
      </View>
      <View style={styles.containerBotones}>
        <CustomButton text={"Delete"} light={true} onPress={() => handleDelete(id)} color={"#0F96AB"} />
        <CustomButton text={"Edit"} light={true} onPress={() => handleEditTodo(id)} color={"#23DBF7"} />
        <CustomButton text={"Complete"} light={true} onPress={() => handleComplete(id)} color={"#FD6443"} />
      </View>
      </ScrollView>
    </View>
  );
};

export default Todo;

styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    // borderwidth: 1,
    padding: 10,
    borderRadius: 5,
    // backgroundColor: "#2d7bdc",
    backgroundColor: "#E002DD",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container2: {
    flexDirection: "row",
    gap: 10,
  },
  todoCompleted: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2d7bdc",
  },
  containerBotones: {
    flexDirection: "row",
     gap: 10, 
     marginTop: 10,
     justifyContent: "space-evenly",
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "white",
  },
});
