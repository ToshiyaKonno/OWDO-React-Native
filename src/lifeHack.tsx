import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, PickerIOSItem, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";



//functionの名前をファイル名とおなじになるように変更
//<Text>の表示する文字に画面の名前を設定
export default function lifeHack() {
  return (
    <View style={styles.container}>
      <Text> lifeHackScreen!!! </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff00",
    alignItems: "center",
    justifyContent: "center",
  },
});
