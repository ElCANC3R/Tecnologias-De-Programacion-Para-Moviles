//Un elemento de texto personalizable para React Native.
import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = ({texto ,fontSize, color, bold  }) => {
    return (
        <Text style={[styles.text, {fontSize: fontSize, color: color, fontWeight: bold ? "bold" : "normal"}]}>{texto}</Text>
    );
    };

    export default CustomText;
