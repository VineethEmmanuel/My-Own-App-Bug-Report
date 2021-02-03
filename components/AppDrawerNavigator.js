import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import SearchScreen from "../screens/SearchScreen";
import OrderScreen from "../screens/OrderScreen";
import CreateItem from "../screens/CreateItem";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: SearchScreen,
    },
    MyOrders: {
      screen: OrderScreen,
    },
    CreateItem: {
      screen: CreateItem,
    },
  },
  {
    initialRouteName: "Home",
  }
);
