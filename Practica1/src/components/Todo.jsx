import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";
import CustomButtonIcon from "./CustomButtonIcon";

const Todo = ({ id, name, handleDelete, handleComplete, done, createdDate, handleEditTodo, edited, handleModal }) => {

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
      return <Text style={styles.corallight}>{edited ? "Edited " + dateText : "Created "+dateText}</Text>;
    } else {
      return <Text style={styles.date}>{edited ? "Edited " + dateText : "Created "+dateText}</Text>;
    }
  };


  return (
    <View style={[
      styles.container,
      done && styles.todoCompleted]}>
      <ScrollView style={{ direction: "horizontal" }}>
        <View>
          <Text style={[styles.text, done && styles.textCompleted]}>{name}</Text>
          {formatCreatedDate(createdDate)}
        </View>
        <View style={styles.containerBotones}>
          {/*<CustomButton text={"Complete"} light={true} onPress={() => handleComplete(id)} color={"#0F96AB"} />
          <CustomButton text={"Edit"} light={true} onPress={() => handleEditTodo(id)} color={"#66D7D1"} />
          <CustomButton text={"Delete"} light={true} onPress={() => handleDelete(id)} color={"#003B43"} /> */}
          <CustomButtonIcon name={"checkcircleo"} onPress={() => handleComplete(id)} />
          <CustomButtonIcon name={"edit"} onPress={() => handleEditTodo(id)} />
          <CustomButtonIcon name={"delete"} onPress={() => handleDelete(id)} />
          <CustomButtonIcon name={"eye"} onPress={() => handleModal(id)} />
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
    borderwidth: 1,
    borderBlockColor: "black",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2A3132",
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
    backgroundColor: "#07575B",
  },
  containerBotones: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "white",
  },
  date: {
    color: "white",
  },
});
