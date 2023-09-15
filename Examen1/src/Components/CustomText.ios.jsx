import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomText = () => {
  return (
    <View>
      <Text style={styles.ios}>CustomText</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  ios: {
    color: "red",
  },
});
