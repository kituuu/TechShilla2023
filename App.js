// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableHighlight,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Command from "./app/screens/Command";

export default function App() {
  console.log(Dimensions.get("screen"));
  let dash = fetch("https://api.ipify.org/?format=json")
    .then((results) => results.json())
    .then((data) => console.log(data.ip));
  return <WelcomeScreen />;
  // return <Command />;
}
