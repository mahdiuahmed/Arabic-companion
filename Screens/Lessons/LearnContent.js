import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as Speech from "expo-speech";
import { lessons } from "../../AllLessons";

const LearnContent = ({ route, navigation }) => {
  const { title } = route.params;
  const { id } = route.params;

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const handlePress = () => {
    options = {
      voice: "ar-xa-x-ard-local",
      pitch: 1,
      rate: 0.5,
    };

    Speech.speak(lessons[id].testQuestions[currentLetterIndex].letter, options);
  };

  const handlePress2 = () => {
    options = {
      voice: "ar-xa-x-ard-local",
      pitch: 1,
      rate: 0.5,
    };

    Speech.speak(
      lessons[id].testQuestions[currentLetterIndex].letterInitial,
      options
    );
  };

  const handleNext = () => {
    setCurrentLetterIndex(
      (currentLetterIndex + 1) % lessons[id].testQuestions.length
    );
  };

  const handlePrev = () => {
    setCurrentLetterIndex(
      (currentLetterIndex - 1 + lessons[id].testQuestions.length) %
        lessons[id].testQuestions.length
    );
  };

  const renderLetter = () => {
    const currentLetter = lessons[id].testQuestions[currentLetterIndex];
    return (
      <>
        {lessons[id].testQuestions[currentLetterIndex].letterInitial ? (
          <TouchableOpacity
            style={styles.button}
            key={currentLetter.id}
            onPress={handlePress2}
          >
            <Text style={styles.buttonText}>
              {"Initial: " +
                lessons[id].testQuestions[currentLetterIndex].letterInitial}
            </Text>
            <Text style={styles.buttonText}>
              {"Medial: " +
                lessons[id].testQuestions[currentLetterIndex].letterMedial}
            </Text>
            <Text style={styles.buttonText}>
              {"Final: " +
                lessons[id].testQuestions[currentLetterIndex].letterFinal}
            </Text>
            <Text style={styles.buttonText}>
              {currentLetter.transliteration}
            </Text>
            <Text style={styles.buttonText}>
              Phonetic: {currentLetter.englishEquivalent}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            key={currentLetter.id}
            onPress={handlePress}
          >
            <Text style={styles.buttonText}>{currentLetter.letter}</Text>
            <Text style={styles.buttonText}>
              {currentLetter.transliteration}
            </Text>
            {lessons[id].testQuestions[currentLetterIndex].englishEquivalent ? (
              <Text style={styles.buttonText}>
                Phonetic: {currentLetter.englishEquivalent}
              </Text>
            ) : null}
          </TouchableOpacity>
        )}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>Tap the word to hear what it sounds like</Text>
      <View style={styles.contentContainer}>{renderLetter()}</View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
          <Text style={styles.arrowButtonText}>{">"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={handlePrev}>
          <Text style={styles.arrowButtonText}>{"<"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
  },
  contentContainer: {},
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 80,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#54BAB9",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 32,
    marginVertical: 4,
    fontFamily: "arabicFont",
  },
  arrowButton: {
    backgroundColor: "#54BAB9",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  arrowButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
});

export default LearnContent;
