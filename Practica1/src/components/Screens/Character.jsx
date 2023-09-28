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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomHeader from "../CustomHeader";


const CharacterCard = ({ navigation, route }) => {
  const { item } = route.params;
  const { canGoBack, goBack } = navigation;
  console.log(item.location);
  return (
    
    <View style={styles.container1}>
      
      <View>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.container3}>
        <CustomText
          texto={item.name}
          fontSize={25}
          color={"#fff"}
          bold={true}
        />
        <View style={styles.container2}>
          <MaterialCommunityIcons
            name="circle"
            size={15}
            color={
              item.status === "Alive"
                ? "green"
                : item.status === "Dead"
                  ? "red"
                  : "gray"
            }
            style={{ marginRight: 5 }}
          />
          <CustomText
            texto={item.status + " - " + item.species}
            fontSize={15}
            color={"#fff"}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <CustomText
            texto="Last known location:"
            fontSize={13}
            color={"#A29B90"}
          />
          <CustomText
            texto={item.location.name}
            fontSize={15}
            color={"#fff"}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <CustomText
            texto="Fisrt time see in:"
            fontSize={13}
            color={"#A29B90"}
          />
          <CustomText
            texto={item.origin.name}
            fontSize={15}
            color={"#fff"}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <CustomText
            texto="Gender:"
            fontSize={13}
            color={"#A29B90"}
          />
          <CustomText
            texto={item.gender}
            fontSize={15}
            color={"#fff"}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <CustomText
            texto="Type:"
            fontSize={13}
            color={"#A29B90"}
          />
          <CustomText
            texto={item.type}
            fontSize={15}
            color={"#fff"}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <CustomText
            texto="Episodes:"
            fontSize={13}
            color={"#A29B90"}
          />
          <CustomText
            texto={item.episode.length}
            fontSize={15}
            color={"#fff"}
          />
        </View>
        <Button style={styles.boton} disabled={!canGoBack} title="Volver" onPress={() => goBack()} />
      </View>
    </View>
  );
};

export default CharacterCard;


const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#2E3133",
    borderRadius: 10,
    marginBottom: 20,
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
});