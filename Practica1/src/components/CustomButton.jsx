import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ text, onPress, light, color }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        light && { borderColor: "white", backgroundColor:color },
      ]}
      onPress={onPress}
    >
      <Text style={{ color: light ? "white" : "black" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
