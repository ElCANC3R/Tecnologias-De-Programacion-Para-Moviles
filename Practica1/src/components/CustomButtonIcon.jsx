import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const CustomButtonIcon = ({ name, onPress}) => {
  return (
    <TouchableOpacity
      
      onPress={onPress}
    >
      <AntDesign name={name} size={24} color="white" />
    </TouchableOpacity>
  );
};

export default CustomButtonIcon;

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
