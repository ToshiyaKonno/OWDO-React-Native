import { StatusBar } from "expo-status-bar";
// import React from "react";
import { StyleSheet, Text, View, PickerIOSItem, Button,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";
// import tuna from "../assets/images/tuna.jpg"; 
// import petbottle from "../assets/images/petbottole.jpg"; 
import React, { Component, useState } from "react";
import { Value } from "react-native-reanimated";
import { Item } from "react-native-paper/lib/typescript/src/components/Drawer/Drawer";

let LH = "test";
const imgArray = [
  require("../assets/images/petbottole.jpg"),
  require("../assets/images/tuna.jpg"),
];
const imgText = ["ペットボトルで簡易ランタン","ツナ缶でランプ"];

//functionの名前をファイル名とおなじになるように変更
//<Text>の表示する文字に画面の名前を設定
export default function lifeHack() {
  const [imgNum, setImgNum] = useState(0);
  return (
    <View style={styles.container}>
      {/* <Text>{LH}</Text> */}
      <Image
        source={imgArray[imgNum]}
        style={{
          width: 300,
          height: 300,
          resizeMode: "contain",
        }}
      />
      <RNPickerSelect
        onValueChange={(value: number) => setImgNum(value)}
        items={[
          { label: "ペットボトルで簡易ランタン", value: 0 },
          { label: "ツナ缶でランプ", value: 1 },
        ]}
      />
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
  picker: {
    width: 200,
    backgroundColor: '#FFF',
  },
  pickerItem: {
    color: 'blue'
  },
});

