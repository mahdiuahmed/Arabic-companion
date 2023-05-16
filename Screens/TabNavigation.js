// Importing necessary libraries and components
import { I18nManager, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProgressScreen from "./ProgressScreen";
import SettingsScreen from "./SettingsScreen";
import Icon from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Creating a custom tab navigation component
const TabNavigation = ({ navigation }) => {
  // Initializing a BottomTabNavigator component
  const Tab = createBottomTabNavigator();

  return (
    // Adding options to the BottomTabNavigator
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#0b7e7f",
          // Flipping the icons horizontally for RTL language
          transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
        },
        // Hiding the labels of the tabs
        tabBarShowLabel: false,
        // Aligning the header titles to center
        headerTitleAlign: "center",
        // Adding custom icons to the tabs
        tabBarIcon: ({ focused, color }) => {
          if (route.name === "Home") {
            return (
              <Icon
                name={focused ? "home-sharp" : "home-outline"}
                size={28}
                color={color}
              />
            );
          } else if (route.name === "Progress") {
            return (
              <Icon
                name={focused ? "school" : "school-outline"}
                size={28}
                color={color}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Icon
                name={focused ? "settings" : "settings-outline"}
                size={28}
                color={color}
              />
            );
          }
        },
        // Customizing the colors of active and inactive tabs
        tabBarInactiveTintColor: "#ccce",
        tabBarActiveTintColor: "white",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

// Exporting the custom tab navigation component
export default TabNavigation;

// Declaring empty styles
const styles = StyleSheet.create({});
