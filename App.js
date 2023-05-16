// Importing necessary components and screens
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useState } from "react";
import TabNavigation from "./Screens/TabNavigation";
import Lesson from "./Screens/Lessons/Lesson";
import LearnContent from "./Screens/Lessons/LearnContent";
import TestContent from "./Screens/Lessons/TestContent";
import FinishLesson from "./Screens/Lessons/FinishLesson";
import ProgressContent from "./Screens/Progress/ProgressContent";

// Create a stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  // Create a state variable to hold whether the app is ready or not
  const [isReady, setIsReady] = useState(false);

  // Function to load custom fonts
  async function loadFonts() {
    await Font.loadAsync({
      arabicFont: require("./assets/Fonts/arabic/Tajawal-Regular.ttf"),
      poppinsBold: require("./assets/Fonts/english/Poppins-Bold.ttf"),
      poppinsRegular: require("./assets/Fonts/english/Poppins-Regular.ttf"),
      poppinsLight: require("./assets/Fonts/english/Poppins-Light.ttf"),
    });
  }

  // Return the app with a NavigationContainer and Stack Navigator
  return isReady ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerTransparent: true,
            animation: "slide_from_right",
            title: "",
          }}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Lesson"
          component={Lesson}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="LearnContent"
          component={LearnContent}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="TestContent"
          component={TestContent}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="FinishLesson"
          component={FinishLesson}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="ProgressContent"
          component={ProgressContent}
          options={{ animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    // If app is not ready, show AppLoading component until fonts are loaded
    <AppLoading
      startAsync={loadFonts}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
}

// Create a styles object using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
