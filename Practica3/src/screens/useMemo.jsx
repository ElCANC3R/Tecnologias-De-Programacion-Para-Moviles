import React, { useMemo, useReducer, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";


const Practica4 = () => {

    const [counter, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(counter + 1);
    }

    const handleSquare = () => {
        setCounter(counter * counter);
    }

    const handleReset = () => {
        setCounter(0);
    }

    const multiplyCounter = useMemo(() => {
        console.log("Multiplicando el counter");
        return counter * 2;
    }, [counter])

  return (
    <View style={styles.container}>
        <Text style={styles.text}>{counter} </Text>
        <TouchableOpacity style={{borderWidth:1, borderColor:"pink"}} onPress={handleCounter}>
            <Text style={styles.textResult}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1, borderColor:"pink"}} onPress={handleSquare}>
            <Text style={styles.textResult}>Square</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1, borderColor:"pink"}} onPress={handleReset}>
            <Text style={styles.textResult}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1, borderColor:"pink"}} >
            <Text style={styles.textResult}>x2 {multiplyCounter}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Practica4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: "#ffff",
    fontSize: 30,
  },
  textResult: {
    color: "#ffff",
    fontSize: 50,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  containerTexto: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "20%",
    backgroundColor: "#000000",
    borderRadius: 10,
    padding: 20,
  },
});
