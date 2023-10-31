import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ text, role, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        role == "number" ? styles.numberContainer : styles.operatorContainer,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    borderRadius: 35,
    backgroundColor: "#cc00ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  numberContainer: {
    backgroundColor: "gray",
  },
  operatorContainer: {
    backgroundColor: "#D75731",
  },
  text: {
    color: "white",
    fontSize: 30,
    
  },
});
