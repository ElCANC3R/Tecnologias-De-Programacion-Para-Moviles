import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import CustomText from "./CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomHeader = () => {
    const { canGoBack, goBack } = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => goBack()} disabled={!canGoBack} style={{marginRight:35}}>
                <AntDesign name="arrowleft" size={24} color="gray" />
            </TouchableOpacity>
            <CustomText texto="$234 000 000" fontSize={35} color={"black"} bold={true}/>
            <TouchableOpacity onPress={() => goBack()} disabled={!canGoBack} style={{marginLeft:35}}>
                <Feather name="x" size={24} color="gray" />
            </TouchableOpacity>
        </View>
    );
}   

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: "center",
        
        flexDirection: "row",
        paddingHorizontal: 20,
    },
});
