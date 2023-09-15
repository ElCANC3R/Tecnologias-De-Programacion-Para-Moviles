import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import CustomText from "../CustomText.android";

//Una card que recibe de tipo de dato imagen hashtag name y price como props
const Card2 = ({ image, hashtag, name, price }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardImageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={{marginBottom:20}}>
                <CustomText text={hashtag} bold={false} fontSize={15} color="black" />
                <CustomText text={name} bold={true} fontSize={17} color="black" />
                <View style={styles.rowContainer}>
                <MaterialIcons name="monetization-on" size={20} color="yellow" />
                <CustomText text={price} bold={true} fontSize={16} color="black" />
                </View>
            </View>
        </View>
    );
};

export default Card2;

const styles = StyleSheet.create({
  cardContainer: {
    height: "auto",
    width: 150,
    borderRadius: 40,
    
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
   
},
  cardContainerLight: {
    backgroundColor: "#c6ceff",
  },
  cardContainerDark: {
    backgroundColor: "#2263df",
  },
  cardIconContainer: {
    width: 35,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  cardIconContainerDark: {
    backgroundColor: "#e6ecff",
  },
  cardIconContainerLight: {
    backgroundColor: "#2362df",
  },
  cardText: {
    fontSize: 22,
  },
  cardTextLight: {
    color: "#48525e",
  },
  cardTextDark: {
    color: "white",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
},
});
