import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  Image,
  Button,
} from "react-native";
import CustomText from "./CustomText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomHeader from "./CustomHeader";

const CharactersScrean = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const getApiData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getApiData();
  }, []);

  return (
    <View>
      <CustomHeader />
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
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
                  <Button style={styles.boton} title="Ver mas" onPress={() => navigation.navigate("Card", { item: item })} />
                </View>
              </View>
            </View>
          );
        }}


      />
    </View>
  );
};

export default CharactersScrean;

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
    height: 200,
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
    width: 50,
    height: 20,
    backgroundColor: "#2E3133",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
});
