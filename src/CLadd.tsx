import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { clsave, save } from "./Store";
import { TextInput, Button } from "react-native-paper";

export default function promiseadd() {
  const [text, setText] = React.useState("");
  // 画面遷移の定義
  const navigation = useNavigation();

  // Main画面に戻る関数を用意
  const toBack = () => {
    navigation.goBack();
  };
  // 保存ボタンを押した時の関数
  const onSave = () => {
    clsave(text, Date.now());
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="メモしたいことを入力してください。"
        multiline
        onChangeText={(text) => setText(text)}
      />
      <Button onPress={onSave} mode="contained">
        保存
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});












// import { useNavigation } from "@react-navigation/native";
// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { clsave,  } from "./Store";
// import { TextInput, Button } from "react-native-paper";

// export default function Cladd() {
//   const [Check, setCheck] = React.useState("");
//   // 画面遷移の定義
//   const navigation = useNavigation();

//   // Main画面に戻る関数を用意
//   // const toBack = () => {
//   //   navigation.goBack();
//   // };
//   // 保存ボタンを押した時の関数
//   const onSave = () => {
//     clsave(Check, Date.now());
//     navigation.goBack();
//   };
//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="持ち物を追加してください。"
//         multiline
//         onChangeText={(cl) => setCheck(cl)}
//       />
//       <Button onPress={onSave} mode="contained">
//         保存
//       </Button>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
