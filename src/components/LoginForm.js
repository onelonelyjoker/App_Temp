import React from "react";
import { TextInput, Button } from "react-native-paper";
import { View } from "react-native";
function LoginForm() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View style={{ marginHorizontal: 50, marginVertical: 0 }}>
        <TextInput
          style={{ marginVertical: 0, paddingVertical: 0 }}
          mode="outlined"
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={text2}
          onChangeText={(text) => setText2(text)}
        />
        <View
          style={{
            borderColor: "black",
            borderWidth: 10,
            maxWidth: 150,
            justifyContent: "center",
            alignContent: "flex-end",
          }}
        >
          <Button mode="contained">SIGN IN</Button>
        </View>
      </View>
    </View>
  );
}
export default LoginForm;
