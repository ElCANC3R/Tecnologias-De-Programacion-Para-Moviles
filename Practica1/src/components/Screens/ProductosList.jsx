import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  Touchable,
} from "react-native";
import CustomText from "../CustomText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomHeader from "../CustomHeader";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductosList = ({ navigation }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //console.log("useEffect");
    const getApiData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        setProductos(data);
        console.log(data[5].id);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  return (
    <View>
      {loading ?  <ActivityIndicator size="large" color="#00ff00" /> : (
        <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.containerProductos}>
              <View style={styles.containerInfo}>
              <CustomText texto={item.title} fontSize={15} color={"pink"} />
                <CustomText texto={item.category.name} fontSize={25} color={"green"} bold={true} />
                <CustomText texto={"Descripcion:"} fontSize={15} color={"#fff"} />
                <CustomText texto={item.description} fontSize={15} color={"#fff"} />
                <CustomText texto={"$"+item.price} fontSize={20} color={"orange"} bold={true} />
              </View>
              <View>
               <TouchableOpacity onPress={() => navigation.navigate("Card", { item })}>
               <Image source={{ uri: item.category.image }} style={styles.image} />
                </TouchableOpacity>
              </View>
            </View>
            
          );
        }}
      />
      ) }
      
      
    </View>
  );
};

export default ProductosList;

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
