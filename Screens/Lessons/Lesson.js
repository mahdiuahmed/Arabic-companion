// Import necessary libraries and components
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

// Define the Lesson component
const Lesson = ({ route, navigation }) => {

  // Extract the title and id values from the route params
  const { title } = route.params;
  const { id } = route.params;

  // Define functions for navigating to the "LearnContent" and "TestContent" screens
  const learnContent = () => {
    navigation.navigate("LearnContent", { title, id });
  };
  const testContent = () => {
    navigation.navigate("TestContent", { title, id });
  };

  // Render the component's view
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.buttonLearn} onPress={learnContent}>
        <Text style={styles.buttonText}>LEARN CONTENT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonQuiz} onPress={testContent}>
        <Text style={styles.buttonText}>START QUIZ</Text>
      </TouchableOpacity>
    </View>
  );
};

// Export the Lesson component as the default export
export default Lesson;

// Define the component's styles using a StyleSheet component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "poppinsBold",
    marginBottom: 32,
  },
  duration: {
    marginVertical: 10,
    fontFamily: "poppinsRegular",
    fontSize: 16,
  },
  buttonLearn: {
    backgroundColor: "#54BAB9",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  buttonQuiz: {
    backgroundColor: "#54BAB9",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "poppinsRegular",
    fontSize: 16,
  },
});
