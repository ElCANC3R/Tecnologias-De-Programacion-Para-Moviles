import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";

const Todo = ({ id, name, handleDelete, handleComplete, isCompleted }) => {
  return (
    <View style={[
      styles.container,
      isCompleted && styles.todoCompleted]}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton text={"Delete"} light={true} onPress={() => handleDelete(id)} color={"#0F96AB"} />
        <CustomButton text={"Edit"} light={true} color={"#23DBF7"} />
        <CustomButton text={"Complete"} light={true} onPress={() => handleComplete(id)} color={"#23DBF7"} />
      </View>
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
    // borderwidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2d7bdc",
  },
});
