import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as Speech from "expo-speech";

const TestContent = ({ route }) => {
  const { title } = route.params;

  // const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const handlePress = () => {
    options = {
      voice: "ar-xa-x-ard-local",
      pitch: 1,
      rate: 0.5,
    };

    Speech.speak(questions[currentQuestion].letter, options);
  };

  const questions = [
    {
      id: 1,
      letter: "أ",
      transliteration: "(Alif)",
      soundSymbol: "a",
      englishEquivalent: "Apple",
      options: ["a", "e", "o"],
      answer: "a",
    },
    {
      id: 2,
      letter: "ب",
      transliteration: "(Baa)",
      soundSymbol: "B",
      englishEquivalent: "Bet",
      options: ["b", "p", "d"],
      answer: "b",
    },
    {
      id: 3,
      letter: "ت",
      transliteration: "(Taa)",
      soundSymbol: "t",
      englishEquivalent: "tea",
      options: ["t", "k", "c"],
      answer: "t",
    },
    // { id: 4, letter: "ث", transliteration: '(Thaa)', soundSymbol: 'th', englishEquivalent: 'Thing' },
    // { id: 5, letter: "ج", transliteration: '(Jiim)', soundSymbol: 'j', englishEquivalent: 'judge' },
    // { id: 6, letter: "ح", transliteration: '(Haa)', soundSymbol: 'H', englishEquivalent: '' },
    // { id: 7, letter: "خ", transliteration: '(Khaa)', soundSymbol: 'Kh', englishEquivalent: '' },
    // { id: 8, letter: "د", transliteration: '(Daal)', soundSymbol: 'd', englishEquivalent: 'door' },
    // { id: 9, letter: "ذ", transliteration: '(Dhaal)', soundSymbol: 'dh', englishEquivalent: 'That' },
    // { id: 10, letter: "ر", transliteration: '(Raa)', soundSymbol: 'r', englishEquivalent: 'Red' },
    // { id: 11, letter: "ز", transliteration: '(Zaa)', soundSymbol: 'z', englishEquivalent: 'Zoo' },
    // { id: 12, letter: "س", transliteration: '(Siin)', soundSymbol: 's', englishEquivalent: 'Sea' },
    // { id: 13, letter: "ش", transliteration: '(Shiin)', soundSymbol: 'sh', englishEquivalent: 'Shoe' },
    // { id: 14, letter: "ص", transliteration: '(Saad)', soundSymbol: 's', englishEquivalent: 'Saw' },
    // { id: 15, letter: "ض", transliteration: '(Daad)', soundSymbol: 'd', englishEquivalent: 'Dul' },
    // { id: 16, letter: "ط", transliteration: '(Taa)', soundSymbol: 't', englishEquivalent: 'Task' },
    // { id: 17, letter: "ظ", transliteration: '(Dhaa)', soundSymbol: 'dh', englishEquivalent: 'Bet' },
    // { id: 18, letter: "ع", transliteration: '(\'Ain)', soundSymbol: '\'a', englishEquivalent: '\'Angry' },
    // { id: 19, letter: "غ", transliteration: '(Ghain)', soundSymbol: 'gh', englishEquivalent: '' },
    // { id: 20, letter: "ف", transliteration: '(Faa)', soundSymbol: 'f', englishEquivalent: 'Fire' },
    // { id: 21, letter: "ق", transliteration: '(Qaaf)', soundSymbol: 'B', englishEquivalent: 'Bet' },
    // { id: 22, letter: "ك", transliteration: '(Kaaf)', soundSymbol: 'k', englishEquivalent: 'Kid' },
    // { id: 23, letter: "ل", transliteration: '(Laam)', soundSymbol: 'l', englishEquivalent: 'Let' },
    // { id: 24, letter: "م", transliteration: '(Miim)', soundSymbol: 'm', englishEquivalent: 'Man' },
    // { id: 25, letter: "ن", transliteration: '(Nuun)', soundSymbol: 'n', englishEquivalent: 'Net' },
    // { id: 26, letter: "هـ", transliteration: '(Haa)', soundSymbol: 'B', englishEquivalent: 'Bet' },
    // { id: 27, letter: "و", transliteration: '(Waaw)', soundSymbol: 'w', englishEquivalent: 'Watch' },
    // { id: 28, letter: "ي", transliteration: '(Yaa)', soundSymbol: 'y', englishEquivalent: 'Yet' },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      console.log("correct " + score);
    } else {
      console.log("no " + score);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End of quiz
      alert(`You scored ${score+1}/${questions.length}`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Question : {questions[currentQuestion].id}
      </Text>
      <Text style={styles.question}>What sound does this letter make?</Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.letter}>{questions[currentQuestion].letter}</Text>
      </TouchableOpacity>
      <View style={styles.options}>
        {questions[currentQuestion].options.map((option) => (
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
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  letter: {
    fontSize: 60,
    fontWeight: "bold",
    color: "white",
  },
  options: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
  },
  option: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    width: "50%",
    margin: 24,
  },
  optionText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#54BAB9",
    padding: 24,
    margin: 32,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TestContent;
