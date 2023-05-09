import { I18nManager, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./HomeScreen";
import LearnScreen from "./LearnScreen";
import SettingsScreen from "./SettingsScreen";
import Icon from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabNavigation = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#0b7e7f",
          transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
        },
        tabBarShowLabel: false,
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused, color }) => {
          if (route.name === "Home") {
            return (
              <Icon
                name={focused ? "home-sharp" : "home-outline"}
                size={28}
                color={color}
              />
            );
          } else if (route.name === "Learn") {
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
        tabBarInactiveTintColor: "#ccce",
        tabBarActiveTintColor: "white",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Learn" component={LearnScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
