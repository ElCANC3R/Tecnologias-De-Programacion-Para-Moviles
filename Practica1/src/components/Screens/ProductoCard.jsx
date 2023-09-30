import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Image,
  Button,
  Switch,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import CustomText from "../CustomText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";


const ProductCard = ({ navigation, route }) => {
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable(previousState => !previousState);
  const { item } = route.params;
  const { canGoBack, goBack } = navigation;
  console.log(item.location);
  return (
            <View style={styles.containerProductos}>
              <View style={styles.containerInfo}>
              <CustomText texto={item.title} fontSize={15} color={"pink"} />
                <CustomText texto={item.category.name} fontSize={25} color={"green"} bold={true} />
                <CustomText texto={"Descripcion:"} fontSize={15} color={"#fff"} />
                <CustomText texto={item.description} fontSize={15} color={"#fff"} />
                <CustomText texto={"$"+item.price} fontSize={20} color={"orange"} bold={true} />
                <Button style={styles.boton} title="Volver" onPress={() => goBack()} />
              </View>
              <View>               
               <Image source={{ uri: item.category.image }} style={styles.image} />
              </View>
            </View>     
  );
};

export default ProductCard;


const styles = StyleSheet.create({
    containerProductos: {
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: "#2E3133",
      borderRadius: 10,
      marginBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
  
    },
    image: {
      width: 150,
      height: 200,
      borderRadius: 10,
    },
    container2: {
      flexDirection: "row",
      alignItems: "center",
    },
    containerInfo: {
      marginLeft: 10,
      gap: 5,
      marginTop: 10,
      marginBottom: 10,
      width: 200,
    },
    boton: {
      width: 50,
      height: 20,
      backgroundColor: "#2E3133",
      borderRadius: 10,
      marginBottom: 20,
      marginTop: 20,
    },
  });