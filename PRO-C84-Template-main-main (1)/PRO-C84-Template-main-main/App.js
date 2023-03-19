import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform,
StatusBar, Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
let customFonts = {
"Bubblegum-Sans":
require("../assets/fonts/BubblegumSans-Regular.ttf")
};
export default class Home extends Component {
constructor(props) {
super(props);
this.state = {
fontsLoaded: false
};
}
async _loadFontsAsync() {
await Font.loadAsync(customFonts);
this.setState({ fontsLoaded: true });
}
componentDidMount() {
this._loadFontsAsync();
}
render() {
if (!this.state.fontsLoaded) {
return <AppLoading />;
} else {
