import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList } from 'react-native-gesture-handler'
import React , { useEffect, useState } from "react";
import { loadAll,removePromiseInfoAsync } from "./Store";   
import { FAB,List } from "react-native-paper"; 

//functionの名前をファイル名とおなじになるように変更
type MainNavigationProp = StackNavigationProp<RootStackParamList, "Main">;
//Props型を定義
type Props = {
  navigation: MainNavigationProp;
};

export default function promise(props: Props) {
  const [memos, setMemos] = useState<memo[]>([]);

  // useEffectは最初にページが読み込まれた時に呼び出される
  useEffect(() => {
    // asyncで非同期で読み込みとstate更新を定義
    const initialize = async () => {
      // awaitで読み込みが終わるまで待機
      const newMemos = await loadAll();
      setMemos(newMemos);
    };
    // 画面が戻ってきた時に動作するようにnavigationの動作に追加
    navigation.addListener("focus", initialize);
  });

  const { navigation } = props;

  const toContactadd = () => {
    navigation.navigate("promiseadd");
  };

  //--------------------以下消去--------------------------------------
  // 画像リストをストレージから読み込み、更新する
  const updatePromiseInfoListAsync = async () => {
    const newMemoInfoList = await loadAll();
    // .reverse()を追加
    setMemos(newMemoInfoList.reverse());
  };

  // 消去する処理
  const handleLongPressPicture = (item: memo) => {
    Alert.alert(item.text, "この約束を消しますか？", [
      {
        text: "キャンセル",
        style: "cancel",
      },
      {
        text: "削除",
        onPress: () => {
          removePromiseInfoAndUpdateAsync(item);
        },
      },
    ]);
  };

  //-------------------------上記消去機能---------------------------------
  const removePromiseInfoAndUpdateAsync = async (memo: memo) => {
    await removePromiseInfoAsync(memo);
    updatePromiseInfoListAsync();
  };
  return (
    <View style={styles.container}>
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

      <FAB style={styles.addButton} icon="pencil" onPress={toContactadd} />
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

