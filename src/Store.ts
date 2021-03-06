import Storage from "react-native-storage";
import AsyncStorage from "@react-native-community/async-storage";


const CL_KEY = "checklist";
const CONTACT_KEY = "contact";
const PROMISE_KEY = "memo";

// ストレージの初期化
const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null, //milliseconds 24時間 ・・nul変更することで記事が消えなくなる
  enableCache: true,
});
// 保存処理(ここではお約束)
export const save = (text: string, createdAt: number) => {
  // 保存する時のキー データを読み取る時の合言葉
  const key = "memo";
  storage.save({
    key: key, // データの合言葉 keyでアンダースコア（"_"）を使用しないでください
    id: `${createdAt}`, // これがないと常に上書きになってしまう。
    data: {
      text: text,
      createdAt: createdAt,
    },
  });
  alert("お約束を追加しました");
};

// チェックリストーーーーーーーーーーーーーーーーーー
export const clsave = (cl: string, time: number) => {
  // 保存する時のキー データを読み取る時の合言葉
  const key1 = "checklist";
  storage.save({
    key: key1, // データの合言葉 keyでアンダースコア（"_"）を使用しないでください
    id: `${time}`, // これがないと常に上書きになってしまう。
    data: {
      text: cl,
      createdAt: time,
    },
  });
  alert("チェックリストを追加しました");
};
export const Contactsave = (cl: string, time: number) => {
  // 保存する時のキー データを読み取る時の合言葉
  const key2 = "contact";
  storage.save({
    key: key2, // データの合言葉 keyでアンダースコア（"_"）を使用しないでください
    id: `${time}`, // これがないと常に上書きになってしまう。
    data: {
      text: cl,
      createdAt: time,
    },
  });
  alert("連絡先を追加しました");
};









// お約束保存
export const loadAll = async () => {                            
  const key = "memo";                                           
  const memos = await storage.getAllDataForKey(key);            
  return memos;                                                 
};  

// チェックリスト保存
export const loadChecklist = async () => {
  const key1 = "checklist";
  const memos1 = await storage.getAllDataForKey(key1);
  return memos1;
};  
// 連絡先保存
export const loadContact = async () => {
  const key2 = "contact";
  const memos2 = await storage.getAllDataForKey(key2);
  return memos2;
};

// 削除処理 keyに対応するデータの中からidのデータを削除(ここではチェックリスト)
export const removeMemoInfoAsync = async (memos1: memo) => {
  await storage.remove({
    key: CL_KEY,
    id: `${memos1.createdAt}`,
  });
}
// 削除処理 keyに対応するデータの中からidのデータを削除(ここでは緊急連絡先)
export const removeContactInfoAsync = async (memos2: memo) => {
  await storage.remove({
    key: CONTACT_KEY,
    id: `${memos2.createdAt}`,
  });
}
// 削除処理 keyに対応するデータの中からidのデータを削除(ここではお約束)
export const removePromiseInfoAsync = async (memos: memo) => {
  await storage.remove({
    key: PROMISE_KEY,
    id: `${memos.createdAt}`,
  });
}