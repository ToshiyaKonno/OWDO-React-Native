import React from "react";
import { View, Text, StyleSheet,PickerIOSBase } from "react-native";
import RNPickerSelect from "react-native-picker-select";


export default class App extends React.Component {
  render() {
    return (
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <PickerIOS style={{ flex: 1 }}>
            <PickerIOSItem value={1} label="0" />
            <PickerIOSItem value={2} label="1" />
            <PickerIOSItem value={3} label="2" />
            <PickerIOSItem value={4} label="3" />
            <PickerIOSItem value={5} label="4" />
          </PickerIOS>
          <Text>Apples</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <PickerIOS style={{ flex: 1 }}>
            <PickerIOSItem value={1} label="0" />
            <PickerIOSItem value={2} label="1" />
            <PickerIOSItem value={3} label="2" />
            <PickerIOSItem value={4} label="3" />
            <PickerIOSItem value={5} label="4" />
          </PickerIOS>
          <Text>pears</Text>
        </View>
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#789",
    borderRadius: 4,
    color: "#789",
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 300,
    marginLeft: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "#789",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    width: 280,
    marginLeft: 30,
    backgroundColor: "#eee",
  },
});
