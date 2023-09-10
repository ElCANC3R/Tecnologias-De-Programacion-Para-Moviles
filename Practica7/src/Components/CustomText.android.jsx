import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomText = () => {
  return (
    <View>
      <Text style={styles.android}>CustomText</Text>
    </View>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  android: {
    color: "blue",
  },
});
