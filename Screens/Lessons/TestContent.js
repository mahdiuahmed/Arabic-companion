import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Speech from "expo-speech";
import { lessons } from "../../AllLessons";
import { auth, db } from "../../Firebase";
import { addDoc, collection } from "firebase/firestore";

const TestContent = ({ route, navigation }) => {
  const { title } = route.params;
  const { id } = route.params;
  const correct = [];
  const incorrect = [];

  const handlePress = () => {
    options = {
      voice: "ar-xa-x-ard-local",
      pitch: 1,
      rate: 0.5,
    };

    Speech.speak(lessons[id].testQuestions[currentQuestion].letter, options);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === lessons[id].testQuestions[currentQuestion].answer) {
      addDoc(
        collection(
          db,
          "users",
          auth.currentUser.uid,
          "Lesson " + lessons[id].id + " correct answers"
        ),
        {
          LessonName: lessons[id].title,
          LessonId: lessons[id].id,
          CorrectAnswers: {
            answer:
              lessons[id].testQuestions[currentQuestion].letter ||
              lessons[id].testQuestions[currentQuestion].letterInitial,
          },
        }
      );

      console.log(correct);
      setScore((score) => score + 1); // increment score by 1
    } else {
      addDoc(
        collection(
          db,
          "users",
          auth.currentUser.uid,
          "Lesson " + lessons[id].id + " incorrect answers"
        ),
        {
          LessonName: lessons[id].title,
          LessonId: lessons[id].id,
          IncorrectAnswers: {
            answer:
              lessons[id].testQuestions[currentQuestion].letter ||
              lessons[id].testQuestions[currentQuestion].letterInitial,
          },
        }
      );
    }
    if (currentQuestion < lessons[id].testQuestions.length - 1) {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    } else {
      setScore((state) => {
        navigation.navigate("FinishLesson", {
          id,
          title,
          correct,
          incorrect,
          scoresss: state,
        });
        return state;
      });
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Question: {lessons[id].testQuestions[currentQuestion].id}
      </Text>
      <Text style={styles.question}>What sound does this letter make?</Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        {lessons[id].testQuestions[currentQuestion].letter ? (
          <Text style={styles.letter}>
            {lessons[id].testQuestions[currentQuestion].letter}
          </Text>
        ) : null}

        {lessons[id].testQuestions[currentQuestion].letterInitial ? (
          <>
            <Text style={styles.letter}>
              {"Initial: " +
                lessons[id].testQuestions[currentQuestion].letterInitial}
            </Text>
            <Text style={styles.letter}>
              {"Medial: " +
                lessons[id].testQuestions[currentQuestion].letterMedial}
            </Text>
            <Text style={styles.letter}>
              {"Final: " +
                lessons[id].testQuestions[currentQuestion].letterFinal}
            </Text>
          </>
        ) : null}
      </TouchableOpacity>
      <View style={styles.options}>
        {lessons[id].testQuestions[currentQuestion].options.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.option}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3EFEF",
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
    color: "#4F4F4F",
  },
  letter: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#4F4F4F",
    marginBottom: 20,
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  option: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  optionText: {
    fontSize: 24,
    color: "#4F4F4F",
  },
  button: {
    backgroundColor: "#54BAB9",
    padding: 24,
    margin: 32,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});

export default TestContent;
