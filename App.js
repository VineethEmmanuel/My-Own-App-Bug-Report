import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import SearchScreen from "./screens/SearchScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default function App() {
  return <AppContainer />;
}
const switchNavigator = createSwitchNavigator({
  SearchScreen: {
    screen: SearchScreen,
  },
  Drawer: {
    screen: AppDrawerNavigator,
  },
});

const AppContainer = createAppContainer(switchNavigator);
