import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ text }) => {
    <TouchableOpacity style={{ margin: 10, borderWidth: 1, width: 80, }}>
    <Text style={{ color: "white", textAlign: "center", fontSize: 20, alignItems: "center", justifyContent: "center", }}>{text}</Text>
  </TouchableOpacity>
}

export default CustomButton;