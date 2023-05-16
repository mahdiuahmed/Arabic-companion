import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { lessons } from "../../AllLessons";

const FinishLesson = ({ route, navigation }) => {
    const { title } = route.params;
    const { id } = route.params;
    const { scoresss } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>Congratulations!</Text>
        <Text style={styles.subtitleText}>You completed the {title} lesson.</Text>
        <Text style={styles.scoreText}>Score: {scoresss}/{lessons[id].testQuestions.length}</Text>
        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.replace("TabNavigation")}>
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0b7e7f",
  },
  contentContainer: {
    backgroundColor: "#13947d",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitleText: {
    color: "white",
    fontSize: 24,
    marginBottom: 20,
  },
  scoreText: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 40,
  },
  homeButton: {
    backgroundColor: "#1ba37d",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginVertical: 10,
  },
  homeButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default FinishLesson;
