import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Pressable,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg1.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.text}>Welcome</Text>
        </View>
        <View style={styles.view}>
          <Pressable
            style={[styles.button, styles.button2]}
            onPress={() => console.log("Dash")}
          >
            <Text style={styles.text}>Login</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.button2]}
            onPress={() => console.log("Dash")}
          >
            <Text style={styles.text}>Register</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",

    // borderRadius: "10%",
  },
  container: {
    alignItems: "center",
    paddingTop: StatusBar.currentHeight + 20,
    width: "100%",
    paddingTop: 40,
    // flex: 0.2,
  },
  view: {
    paddingBottom: 350,
  },
  text: {
    fontSize: 30,
    fontWeight: 600,
    // justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 3,
    height: 70,
    width: 330,
    margin: 5,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  button2: {
    backgroundColor: "#F6E3DD",
    borderColor: "#B0BCC4",
  },
});

export default WelcomeScreen;
