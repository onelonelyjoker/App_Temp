import React from "react";
import {
  TextInput,
  IconButton,
  Button,
  StyleProp,
  Avatar,
} from "react-native-paper";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
function LoginForm() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <View style={styles.back_button}>
          <IconButton
            icon="arrow-left-drop-circle"
            color="black"
            size={40}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <View style={styles.app_logo}>
          <View style={{ justifyContent: "center", alignContent: "center" }}>
            <Avatar.Image
              size={100}
              style={styles.app_logo}
              source={require("../github.jpg")}
            />
          </View>
        </View>
      </View>
      <View style={styles.form_container}>
        <TextInput
          style={{ marginVertical: 0, paddingVertical: 0 }}
          mode="flat"
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          mode="flat"
          label="Password"
          value={text2}
          onChangeText={(text) => setText2(text)}
        />
        <View style={styles.forgot_password}>
          <Button
            color="white"
            mode="text"
            uppercase={false}
            dark={true}
            compact={true}
            onPress={() => console.log("Pressed")}
          >
            forgot password?
          </Button>
        </View>
        <View style={styles.signin}>
          <Button
            style={{ elevation: 10 }}
            dark={true}
            onPress={() => console.log("Pressed")}
            mode="contained"
          >
            SIGN IN
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#006280",
    justifyContent: "center",
    alignContent: "center",
  },
  header_container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "space-around",
  },
  back_button: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    paddingTop: 20,
  },
  app_logo: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 50,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#006280",
  },
  form_container: { flex: 1, marginHorizontal: 50, marginVertical: 0 },
  forgot_password: {
    flexDirection: "row",
    margin: 0,
    padding: 0,
    justifyContent: "flex-start",
    alignContent: "center",
  },
  signin: {
    flexDirection: "row",
    backgroundColor: "#006280",
    marginVertical: 10,
    justifyContent: "center",
    alignContent: "center",
  },
});
export default LoginForm;
