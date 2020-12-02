import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

// ----------------------Mainからpromiseへ画面遷移-----------------
type MainNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Main"
>;

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
    navigation.push(("Contact"));
  }
  const toCheckList = () => {
    navigation.push("CheckList");
  };
  const tolifeHack = () => {
    navigation.push("lifeHack");
  };
// ----------------------------------------------------------------
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={topromise}>
        <Text>promise Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toContact}>
        <Text>Contact Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={toCheckList}>
        <Text>checklist Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={tolifeHack}>
        <Text>life Hack Screen</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
