import React from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    FlatList,
    Image,
    Button,
} from "react-native";
import CustomText from "../CustomText";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CustomHeader from "../CustomHeader";
import { TouchableOpacity } from "react-native-gesture-handler";


const Screen1 = ({ navigation }) => {
    const { canGoBack, goBack } = navigation;
    return (
        <View style={{ justifyContent: "center", backgroundColor: "#337049" }}>
            <View>
                <CustomHeader></CustomHeader>
            </View>
            <CustomText texto="UroMillions" fontSize={25} color={"black"} bold={true} />
            <View style={styles.container1}>
                <AntDesign name="calendar" size={24} color="black" />
                <CustomText texto="Today" fontSize={25} color={"black"} bold={true} />
                <AntDesign name="clockcircleo" size={24} color="black" />
                <CustomText texto="Today" fontSize={25} color={"black"} bold={true} />
            </View>
            <View style={styles.container2}>
                <View style={styles.container1}>
                    <CustomText texto="Today" fontSize={25} color={"black"} bold={true} />
                    <Ionicons name="reload" size={24} color="black" />
                </View>
                <View style={styles.container1}>
                    <View style={styles.circles}>
                        <CustomText texto="1" fontSize={25} color={"black"} bold={true} />
                    </View>
                    <View style={styles.circles}>
                        <CustomText texto="1" fontSize={25} color={"black"} bold={true} />
                    </View>
                    <View style={styles.circles}>
                        <CustomText texto="1" fontSize={25} color={"black"} bold={true} />
                    </View>
                    <View style={styles.circles}>
                        <CustomText texto="1" fontSize={25} color={"black"} bold={true} />
                    </View>
                    <View style={styles.circles}>
                        <CustomText texto="1" fontSize={25} color={"black"} bold={true} />
                    </View>
                </View>
            </View>
            <View style={styles.container1}>
                <View style={styles.square}>
                    <CustomText texto="1" fontSize={25} color={"black"} bold={true} />
                </View>
                <View style={styles.square}>
                    <CustomText texto="1" fontSize={25} color={"black"} bold={true} />
                </View>
            </View>
            <TouchableOpacity onPress={() => goBack()} disabled={!canGoBack}>
                <View>
                    <CustomText texto="Watch Results-" fontSize={25} color={"black"} bold={true} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Screen1;


const styles = StyleSheet.create({
    container1: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#2E3133",
        borderRadius: 10,
        marginBottom: 20,
        width: 150
    },
    container2: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#ECDCC2",
        borderRadius: 10,
        marginBottom: 5,
    },
    image: {
        width: 120,
        height: 250,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    container2: {
        flexDirection: "row",
        alignItems: "center",
    },
    container3: {
        marginLeft: 10,
        gap: 5,
    },
    boton: {
        width: 100,
        height: 30,
        backgroundColor: "#2E3133",
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20,
    },
    circles: {
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: "center",
        alignContent: "center",
        alignContent: "center",
        backgroundColor: "#F6D439"
    },
    square: {
        borderRadius: 10,
        width: "50%",
        height: 250,
        justifyContent: "center",
        alignContent: "center",
        alignContent: "center"
    }
});
