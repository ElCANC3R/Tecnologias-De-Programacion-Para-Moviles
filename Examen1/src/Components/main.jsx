import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "./CustomText.android";
// import CustomText from "./CustomText.ios";

const Main = () => {
  // const CustomText = Platform.select({
  //   android: CustomText,
  //   ios: CustomText,
  // });
  return (
    <View>
      {/* <CustomText /> */}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
