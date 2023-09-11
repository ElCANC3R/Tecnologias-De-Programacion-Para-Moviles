import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign, MaterialIcons, FontAwesome5   } from "@expo/vector-icons";
import Card from "../../Components/Card";
import SymptomCard from "../../Components/SymptomCard";
import Therapist from "../../Components/Therapist";

const WelcomeScreen = () => {
  const IMAGE = "https://shmector.com/_ph/6/907397949.png";
  const THERAPISTS = [
    {
      id: 1,
      image: IMAGE,
      name: "Dr. Alice Johnson",
      job: "Physiotherapist",
      rate: 5.0,
    },
    {
      id: 2,
      image: IMAGE,
      name: "Dr. Mike Smith",
      job: "Physiotherapist",
      rate: 3.5,
    },
    {
      id: 3,
      image: IMAGE,
      name: "Dr. Johnson",
      job: "Physiotherapist",
      rate: 5.0,
    },
    {
      id: 4,
      image: IMAGE,
      name: "Dr. Alice Johnson",
      job: "Physiotherapist",
      rate: 5.0,
    },
  ];

  const CARD = [
    {
      id: 1,
      isDarkBlue: true,
      text: "Start training",
      iconName: "hdd",
      iconType: "AntDesign",
    },
    {
      id: 2,
      isDarkBlue: false,
      text: "Start training",
      iconName: "hdd",
      iconType: "AntDesign",
    },
    {
      id: 3,
      isDarkBlue: true,
      text: "Start training",
      iconName: "hdd",
      iconType: "AntDesign",
    },
    {
      id: 4,
      isDarkBlue: false,
      text: "Start training",
      iconName: "hdd",
      iconType: "AntDesign",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="notifications-outline" size={40} color="#3764c2" />
        <Image
          style={styles.headerImage}
          source={{
            uri: IMAGE,
          }}
        />
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello,</Text>
        <Text style={{ color: "#2b3941" }}>Chris 👋</Text>
      </Text>
      <ScrollView
        style={{ marginBottom: 40 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {CARD.map((card) => (
          <Card
            key={card.id}
            isDarkBlue={card.isDarkBlue}
            text={card.text}
            iconName={card.iconName}
            iconType={card.iconType}
          />
        ))}
      </ScrollView>
      <Text style={styles.textHeader}>What are your symptoms?</Text>
      <ScrollView
        // style={styles.symptomsContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <SymptomCard symptom="none" />
        <SymptomCard symptom="fever" />
        <SymptomCard symptom="sneeze" />
        <SymptomCard symptom="none" />
      </ScrollView>
      <View style={styles.therapistTitle}>
        <Text style={styles.textHeader}>Popular therapist</Text>
        <Text style={{ color: "#d4d4d7", fontWeight: "bold" }}>See all</Text>
      </View>
      <FlatList
        data={THERAPISTS}
        renderItem={({ item: { image, name, job, rate } }) => (
          <Therapist image={image} name={name} job={job} rate={rate} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.footer}>
      <MaterialIcons name="house" size={24} color="#3764c2" />
      <MaterialIcons name="message" size={24} color="#3764c2" />
      <AntDesign name="calendar" size={24} color="#3764c2" />
      <Ionicons name="person-circle-outline" size={24} color="#3764c2" />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#495258",
  },
  therapistTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  footer:{
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
