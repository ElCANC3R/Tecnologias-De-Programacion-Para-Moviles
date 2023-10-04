import React from "react";
import { View } from "react-native";
import CustomText from "./CustomText";
import { useAppContext } from '../hooks/useAppContext';

const CustomCard = () => {
    const person = useAppContext();
    <View style={styles.container1}>
        <CustomText texto="Card Component" fontSize={25} color={"black"} bold={true} />
        <CustomText texto={"Name:"+person.name} fontSize={25} color={"black"} bold={true} />
        <CustomText texto={"Status:"+person.lastName} fontSize={25} color={"black"} bold={true} />
    </View>;
}

export default CustomCard;

const styles = StyleSheet.create({
    container1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        margin: 10,
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
    },
   
});
