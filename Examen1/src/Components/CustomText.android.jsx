import { StyleSheet, Text, View } from "react-native";
import React from "react";


//Un customText el cual recibe el texto, Bold, fontSize y color como props
const CustomText = ({ text, bold, fontSize, color }) => {
  return (
    <Text style={{ fontWeight: bold ? "bold" : "normal", fontSize: fontSize, color: color }}>
      {text}
    </Text>
  );
};

export default CustomText;

