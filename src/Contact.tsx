import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

//functionの名前をファイル名とおなじになるように変更
type MainNavigationProp = StackNavigationProp<RootStackParamList, "Main">;
//Props型を定義
type Props = {
  navigation: MainNavigationProp;
};

export default function Contact(props: Props) {
  const { navigation } = props;

  const toContactadd = () => {
    //追加
    navigation.navigate("Contactadd"); //追加
  };

  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <Button // 追加
        onPress={toContactadd} // 追加
        title="toCompose" // 追加
      />
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
