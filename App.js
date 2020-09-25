import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <PaperProvider>
      <LoginForm />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
