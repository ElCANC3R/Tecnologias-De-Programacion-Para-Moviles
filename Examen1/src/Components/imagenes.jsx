import { StyleSheet, View, Image } from "react-native";
import React from "react";


//Un customText el cual recibe el texto, Bold, fontSize y color como props
const CustomImage = ({ height, width, borderRadius }) => {
  return (
    <Image style={{ width: width, height: height, borderRadius: borderRadius }} source={require("../../assets/perfil.jpg")}>
    </Image>
  );
};

export default CustomImage;

