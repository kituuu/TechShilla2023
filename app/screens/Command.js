import React from "react";
// import exec from "child_process";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  Pressable,
} from "react-native";

function Command(props) {
  const Shutdown = () => console.log("Shutdown");
  const Restart = () => console.log("Restart");
  const Sleep = () => runCommand(commandMapMac.Sleep);
  const CustomCommand = () => console.log("CustomCommand");
  const ViewScreen = () => console.log("ViewScreen");

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg1.jpg")}
    >
      <View style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.text}>Choose An Option</Text>
        </View>
        <View style={styles.view}>
          <Pressable style={[styles.button, styles.button2]} onPress={Shutdown}>
            <Text style={styles.text}>Shutdown</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.button2]} onPress={Restart}>
            <Text style={styles.text}>Restart</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.button2]} onPress={Sleep}>
            <Text style={styles.text}>Sleep</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.view}>
          <Pressable
            style={[styles.button, styles.button1]}
            onPress={CustomCommand}
          >
            <Text style={styles.text}>Custom Command</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.button1]}
            onPress={ViewScreen}
          >
            <Text style={styles.text}>ViewScreen</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.view}>
          <Pressable style={[styles.button, styles.button3]} onPress={Shutdown}>
            <Text style={styles.text}>Help</Text>
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
    paddingVertical: 15,
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
  button1: {
    backgroundColor: "#F6E3DD",
    borderColor: "#B0BCC4",
  },
  button2: {
    backgroundColor: "#B0BCC4",
    borderColor: "#F6E3DD",
  },
  button3: {
    backgroundColor: "#CA9292",
    borderColor: "#F6E3DD",
  },
});
export default Command;
