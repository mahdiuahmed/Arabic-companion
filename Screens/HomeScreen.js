import {
  I18nManager,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { auth } from "../Firebase";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import { Voice } from "expo-speech";
import { Button, Input } from "@rneui/themed";
import { lessons } from "../AllLessons";

const HomeScreen = ({ navigation }) => {
  const handleLessonPress = (lesson) => {
    navigation.navigate("Lesson", { id: lesson.id - 1, title: lesson.title });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {lessons.map((lesson, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleLessonPress(lesson)}
          >
            <View style={styles.lessonContainer}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b7e7f",
  },
  scrollView: {
    alignItems: "stretch",
    marginTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  lessonContainer: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#1ba37d",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  lessonTitle: {
    fontSize: 18,
    fontFamily: "poppinsBold",
    color: "#fff",
  },
  lessonDuration: {
    color: "#fff",
    fontFamily: "poppinsRegular",
    marginTop: 8,
  },
});
