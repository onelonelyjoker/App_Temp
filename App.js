
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




function HomeScreen({navigation}) {
  setTimeout(()=> {
    navigation.replace('Login');
  }, 2000);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
//This is HomeScreen Component.

const Stack = createStackNavigator();
//This is Navigator 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "Login" component = {LoginForm}/>
        
      </Stack.Navigator>    
    </NavigationContainer>
  );
}


export default App;

