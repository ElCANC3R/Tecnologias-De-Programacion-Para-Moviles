
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

const Screen2 = ({ navigation }) => {
    const { canGoBack, goBack } = navigation;
    return (
        <View style={styles.container}>
            <View>
                <CustomHeader></CustomHeader>
            </View>
            <CustomText
                texto="UroMillions"
                fontSize={15}
                color={"black"}
                bold={true}
            />
            <View style={styles.containerFecha}>
                <AntDesign name="calendar" size={24} color="black" />
                <CustomText texto="Today" fontSize={18} color={"black"} bold={true} />
                <AntDesign name="clockcircleo" size={24} color="black" />
                <CustomText
                    texto="10:11:00"
                    fontSize={18}
                    color={"black"}
                    bold={true}
                />
            </View>
            <View style={styles.containerNumeros}>
                <View style={styles.containerToday}>
                    <CustomText texto="Today" fontSize={25} color={"white"} bold={true} />
                    <Ionicons name="reload" size={24} color="white" />
                </View>
                <View style={styles.containerCircles}>
                    <View style={styles.circles}>
                        <CustomText
                            texto="1"
                            fontSize={20}
                            color={"black"}
                            bold={true}
                            textAlign={"center"}
                        />
                    </View>
                    <View style={styles.circles}>
                        <CustomText
                            texto="7"
                            fontSize={20}
                            color={"black"}
                            bold={true}
                            textAlign={"center"}
                        />
                    </View>
                    <View style={styles.circles}>
                        <CustomText
                            texto="14"
                            fontSize={20}
                            color={"black"}
                            bold={true}
                            textAlign={"center"}
                        />
                    </View>
                    <View style={styles.circles}>
                        <CustomText
                            texto="16"
                            fontSize={20}
                            color={"black"}
                            bold={true}
                            textAlign={"center"}
                        />
                    </View>
                    <View style={styles.circles}>
                        <CustomText
                            texto="19"
                            fontSize={20}
                            color={"black"}
                            bold={true}
                            textAlign={"center"}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.ContainerSquare}>
                <View style={styles.square}>
                    <CustomText
                        texto="Rate type"
                        fontSize={15}
                        color={"gray"}
                        bold={false}
                        textAlign={"start"}
                    />
                    <CustomText
                        texto="One time bet"
                        fontSize={20}
                        color={"black"}
                        bold={true}
                    />
                </View>
                <View style={styles.square}>
                    <CustomText
                        texto="Rate type"
                        fontSize={15}
                        color={"gray"}
                        bold={false}
                    />
                    <CustomText
                        texto="Subscription"
                        fontSize={20}
                        color={"black"}
                        bold={true}
                    />
                </View>
            </View>
            <TouchableOpacity onPress={() => goBack()} disabled={!canGoBack}>
                <View style={styles.Touchable}>
                    <CustomText
                        texto="Watch Results"
                        fontSize={18}
                        color={"white"}
                        bold={true}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Screen2;

const styles = StyleSheet.create({
    container: {
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "#ECDCC2",
        height: "100%",
    },
    containerToday: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: 70,
        marginTop: 15,
        width: 300,
    },
    containerCircles: {
        flexDirection: "row",
        alignItems: "center",
        height: 70,
        marginBottom: 10,
    },
    containerNumeros: {
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#016F48",
        borderRadius: 20,
        marginBottom: 5,
        width: 350,
    },
    ContainerSquare: {
        width: 350,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
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
        width: 55,
        height: 55,
        justifyContent: "center",
        alignContent: "center",
        alignContent: "center",
        backgroundColor: "yellow",
        marginHorizontal: 2,
    },
    square: {
        borderRadius: 25,
        width: "48%",
        height: 200,
        justifyContent: "start",
        alignContent: "center",
        alignContent: "center",
        backgroundColor: "white",
        paddingLeft: 20,
        paddingTop: 25,
    },
    containerFecha: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#E2CEAB",
        borderRadius: 20,
        marginBottom: 20,
        width: 250,
        height: 65,
        marginTop: 15,
    },
    Touchable: {
        backgroundColor: "#016F48",
        borderRadius: 40,
        marginTop: 150,
        width: 250,
        height: 68,
        justifyContent: "center",
        alignItems: "center",
    },
});
