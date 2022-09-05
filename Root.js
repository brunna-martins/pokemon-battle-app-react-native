import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";

import LoginScreen from "./src/screens/LoginScreen";
import BattleScreen from "./src/screens/BattleScreen";
import TeamSelectionScreen from "./src/screens/TeamSelectionScreen";

import Reactotron from "reactotron-react-native";

import { Provider } from "react-redux";

import { compose, createStore } from "redux";
import reducers from "./src/reducers";


// todo: import Redux packages
// todo: import reducers

import { reactotronRedux } from "reactotron-redux";
Reactotron.configure({ host: "177.133.31.211" }) // 192.168.254.108
  .useReactNative()
  .use(reactotronRedux())
  .connect(); // todo: add

console.ignoredYellowBox = ["Setting a timer"];

// todo: create global app store

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
    TeamSelect: TeamSelectionScreen,
    Battle: BattleScreen
  },
  {
    initialRouteName: "Login"
  }
);

class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}

export default Router;