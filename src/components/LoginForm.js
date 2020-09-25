import React from "react";
import { TextInput, Button, StyleProp, Avatar } from "react-native-paper";
import { View, Text } from "react-native";
function LoginForm() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#006280",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          borderColor: "black",
          borderWidth: 2,
        }}
      >
        <Avatar.Image
          size={100}
          style={{ borderColor: "black", borderWidth: 2 }}
          source={require("../github.jpg")}
        />
        <Text>sadasd</Text>
      </View>
      <View style={{ flex: 1, marginHorizontal: 50, marginVertical: 0 }}>
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
        <View
          style={{
            flexDirection: "row",
            margin: 0,
            padding: 0,
            justifyContent: "flex-start",
            alignContent: "center",
          }}
        >
          <Button
            color="white"
            mode="text"
            uppercase="false"
            dark="true"
            onPress={() => console.log("Pressed")}
          >
            Forgot Password?
          </Button>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#006280",
            marginVertical: 10,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button
            style={{ elevation: 10 }}
            dark="true"
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
export default LoginForm;
