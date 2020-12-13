import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Image,Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import logo from '/Users/konnotoshiya/camp/01_react/OWDO/assets/OWDO.png';
import contact from "../assets/MainPic/contact.png";
import exit from "../assets/MainPic/exit.png";
import family from "/Users/konnotoshiya/camp/01_react/OWDO/assets/MainPic/family.png";
import light from "../assets/MainPic/light.png";

// ----------------------Mainからpromiseへ画面遷移-----------------

type MainNavigationProp = StackNavigationProp<RootStackParamList, "Main">;

//Props型を定義
type Props = {
  navigation: MainNavigationProp;
};
export default function Main(props: Props) {
  const { navigation } = props;
  const topromise = () => {
    navigation.push("promise");
  };
  const toContact = () => {
    navigation.push("Contact");
  };
  const toCheckList = () => {
    navigation.push("CheckList");
  };
  const tolifeHack = () => {
    navigation.push("lifeHack");
  };
  // ----------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={{
          width: 250,
          height: 250,
          resizeMode: "contain",
          marginBottom: 50,
        }}
      />
      <View style={styles.buttons}>
        <TouchableOpacity onPress={topromise}>
          <Image
            source={family}
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
            }}
          />
          <Text style={{ fontSize: 20 }}>おやくそく</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toContact}>
          <Image
            source={contact}
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
            }}
          />
          <Text style={{ fontSize: 20 }}>緊急連絡先</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={toCheckList}>
          <Image
            source={exit}
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
            }}
          />
          <Text style={{ fontSize: 20 }}>持ち物リスト</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={tolifeHack}>
          <Image
            source={light}
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
            }}
          />
          <Text style={{ fontSize: 20 }}>ライフハック</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    backgroundColor: "blue",
    width: 40,
    height: 40,
    lineHeight: 40,
  },
});