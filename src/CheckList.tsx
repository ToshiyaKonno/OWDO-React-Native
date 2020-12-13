import { StatusBar } from "expo-status-bar";
import {StyleSheet,Text,View,Button,Alert,TouchableOpacity,} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList } from "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { loadChecklist, removeMemoInfoAsync } from "./Store";
import { FAB, List } from "react-native-paper";
import * as Notifications from "expo-notifications";


//functionの名前をファイル名とおなじになるように変更
type MainNavigationProp = StackNavigationProp<RootStackParamList, "Main">;
//Props型を定義
type Props = {
  navigation: MainNavigationProp;
};

export default function promise(props: Props) {
  const [memos, setMemos] = useState<memo[]>([]);
  const { navigation } = props;

  React.useEffect(() => {
    requestPermissionsAsync();
  });
  
  const scheduleNotificationAsync = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        body: "乾パンの賞味期限が一ヶ月後です！確認してください！",
        title: "OWDOからのお知らせ",
      },
      trigger: {
        seconds: 5,
      },
    });
    };



const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync();
  if (granted) {
    return;
  }

  await Notifications.requestPermissionsAsync();
};

  // useEffectは最初にページが読み込まれた時に呼び出される
  useEffect(() => {
    // asyncで非同期で読み込みとstate更新を定義
    const initialize = async () => {
      // awaitで読み込みが終わるまで待機
      const newMemos = await loadChecklist();
      setMemos(newMemos);
    };
    // 画面が戻ってきた時に動作するようにnavigationの動作に追加
    navigation.addListener("focus", initialize);
  });

  const toCLadd = () => {
    navigation.navigate("CLadd");
  };
//--------------------以下消去--------------------------------------
  // 画像リストをストレージから読み込み、更新する
  const updateMemoInfoListAsync = async () => {
    const newMemoInfoList = await loadChecklist();
    // .reverse()を追加
    setMemos(newMemoInfoList.reverse());
  };

  // 消去する処理
  const handleLongPressPicture = (item: memo) => {
    Alert.alert(item.text, "チェックリストを消去しますか？", [
      {
        text: "キャンセル",
        style: "cancel",
      },
      {
        text: "削除",
        onPress: () => {
          removeMemoInfoAndUpdateAsync(item);
        },
      },
    ]);
  };

  const removeMemoInfoAndUpdateAsync = async (memo: memo) => {
    await removeMemoInfoAsync(memo);
    updateMemoInfoListAsync();
  };

  //-------------------------上記消去機能---------------------------------
  return (
    <View style={styles.container}>
      <Button
        title="通知テストボタン"
        onPress={scheduleNotificationAsync}
      />
      <FlatList
        data={memos}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }: { item: memo }) => (
          <TouchableOpacity onLongPress={() => handleLongPressPicture(item)}>
            <List.Item
              style={styles.item}
              title={item.text}
              descriptionStyle={styles.description}
            />
          </TouchableOpacity>
        )}
      />

      <FAB style={styles.addButton} icon="pencil" onPress={toCLadd} />
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
  item: {
    minWidth: "100%",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },
  addButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
  description: {
    flex: 1,
    textAlign: "right",
  },
});
