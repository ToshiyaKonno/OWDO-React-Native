import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList } from 'react-native-gesture-handler'
import React , { useEffect, useState } from "react";
import { loadAll } from "./Store";   
import { FAB,List } from "react-native-paper"; 

//functionの名前をファイル名とおなじになるように変更
type MainNavigationProp = StackNavigationProp<RootStackParamList, "Main">;
//Props型を定義
type Props = {
  navigation: MainNavigationProp;
};

export default function promise(props: Props) {
  const [memos, setMemos] = useState<Promisememo[]>([]);

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

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={(item)=>(
<List.Item                                            
            style={styles.item}                                 
            title={item.item.text}                                     
            descriptionStyle={styles.description}                
          />                                                          
        )}
      />
      
      <FAB                                             
        style={styles.addButton}                       
        icon="pencil"                                  
        onPress={toContactadd}                            
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

