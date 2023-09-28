import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CustomHeader = () => {

    const { canGoBack, goBack } = useNavigation();
    return (
        <View style={styles.container}>
            <AntDesign name="arrowleft" size={24} color="black" onPress={() => goBack()} disabled={!canGoBack}/>
        <Text>CustomHeader</Text>
        </View>
    );
    }   

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#aa76ff",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
});
