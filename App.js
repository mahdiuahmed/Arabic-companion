import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from './Screens/RegisterScreen';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import TabNavigation from "./Screens/TabNavigation";
import Lesson from "./Screens/Lessons/Lesson";
import { onAuthStateChanged } from "firebase/auth";
import LearnContent from "./Screens/Lessons/LearnContent";
import TestContent from "./Screens/Lessons/TestContent";

const Stack = createNativeStackNavigator();

export default function App() {

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //     if (user) {
  //       navigation.replace("TabNavigation");
  //     }
  //   });
  // }, []);

  
  const [isReady, setIsReady] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "arabicFont": require("./assets/Fonts/arabic/Tajawal-Regular.ttf"),
      "poppinsBold": require("./assets/Fonts/english/Poppins-Bold.ttf"),
      "poppinsRegular": require("./assets/Fonts/english/Poppins-Regular.ttf"),
      "poppinsLight": require("./assets/Fonts/english/Poppins-Light.ttf"),
    });  
  }
  
  
  return isReady ? (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerTransparent: true, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false, animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Lesson"
          component={Lesson}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="LearnContent"
          component={LearnContent}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="TestContent"
          component={TestContent}
          options={{ animation: 'slide_from_right' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
