import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CustomButton from "./CustomButton";

const Todo = ({ title }) => {
    <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>{title}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <CustomButton text="Delete" />
            <CustomButton text="Edit" />
        </View>
    </View>
}

export default Todo;

const styles = StyleSheet.create({
    container : {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between", 
        margin: 10
    }
  });
