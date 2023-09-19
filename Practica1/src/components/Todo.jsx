import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "./CustomButton";

const Todo = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{name}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton text={"Delete"} light={true} color={"#0F96AB"} />
        <CustomButton text={"Edit"}  light={true} color={"#23DBF7"} />
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
});
