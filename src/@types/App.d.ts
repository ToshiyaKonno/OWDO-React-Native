declare module "*.jpg";
declare module "*.png";
//画面が指定した2つ以外に入らないように型を用意
type RootStackParamList = {
  Main: undefined;//メイン画面
  promise: undefined;//お約束画面
  Contact: undefined;//緊急連絡先
  CheckList: undefined;//チェックリスト
  lifeHack: undefined;//ライフハック
  CLadd: undefined;//チェックリスト追加画面
  Contactadd: undefined;//チェックリスト追加画面
  promiseadd: undefined;//チェックリスト追加画面
  CLedit: undefined;//チェックリスト追加画面
};



