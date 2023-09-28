import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, Touchable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feder } from '@expo/vector-icons';
import CustomText from "./CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomHeader = () => {

    const { canGoBack, goBack } = useNavigation();



    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goBack()} disabled={!canGoBack}>
            <AntDesign name="arrowleft" size={24} color="gray" onPress={() => goBack()} disabled={!canGoBack}/>
            </TouchableOpacity>
            <CustomText texto="$234 000 000" fontSize={25} color={"black"} bold={true}/>
            <TouchableOpacity onPress={() => goBack()} disabled={!canGoBack}>
            <Feder name="x" size={24} color="gray" />
            </TouchableOpacity>
        </View>
    );
    }   

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ECDCC2",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
    },
});
