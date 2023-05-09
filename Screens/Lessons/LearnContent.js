import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as Speech from "expo-speech";

const LearnContent = ({ route }) => {
  const { title } = route.params;

  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  const handlePress = () => {
    options = {
      voice: "ar-xa-x-ard-local",
      pitch: 1,
      rate: 0.5,
    };

    Speech.speak(letters[currentLetterIndex].letter, options);
  };

  const handleNext = () => {
    setCurrentLetterIndex((currentLetterIndex + 1) % letters.length);
  };

  const handlePrev = () => {
    setCurrentLetterIndex(
      (currentLetterIndex - 1 + letters.length) % letters.length
    );
  };

  const letters = [
    { id: 1, letter: "أ", transliteration: '(Alif)', soundSymbol: 'a', englishEquivalent: 'Apple' },
    { id: 2, letter: "ب", transliteration: '(Baa)', soundSymbol: 'B', englishEquivalent: 'Bet' },
    { id: 3, letter: "ت", transliteration: '(Taa)', soundSymbol: 't', englishEquivalent: 'tea' },
    { id: 4, letter: "ث", transliteration: '(Thaa)', soundSymbol: 'th', englishEquivalent: 'Thing' },
    { id: 5, letter: "ج", transliteration: '(Jiim)', soundSymbol: 'j', englishEquivalent: 'judge' },
    { id: 6, letter: "ح", transliteration: '(Haa)', soundSymbol: 'H', englishEquivalent: '' },
    { id: 7, letter: "خ", transliteration: '(Khaa)', soundSymbol: 'Kh', englishEquivalent: '' },
    { id: 8, letter: "د", transliteration: '(Daal)', soundSymbol: 'd', englishEquivalent: 'door' },
    { id: 9, letter: "ذ", transliteration: '(Dhaal)', soundSymbol: 'dh', englishEquivalent: 'That' },
    { id: 10, letter: "ر", transliteration: '(Raa)', soundSymbol: 'r', englishEquivalent: 'Red' },
    { id: 11, letter: "ز", transliteration: '(Zaa)', soundSymbol: 'z', englishEquivalent: 'Zoo' },
    { id: 12, letter: "س", transliteration: '(Siin)', soundSymbol: 's', englishEquivalent: 'Sea' },
    { id: 13, letter: "ش", transliteration: '(Shiin)', soundSymbol: 'sh', englishEquivalent: 'Shoe' },
    { id: 14, letter: "ص", transliteration: '(Saad)', soundSymbol: 's', englishEquivalent: 'Saw' },
    { id: 15, letter: "ض", transliteration: '(Daad)', soundSymbol: 'd', englishEquivalent: 'Dul' },
    { id: 16, letter: "ط", transliteration: '(Taa)', soundSymbol: 't', englishEquivalent: 'Task' },
    { id: 17, letter: "ظ", transliteration: '(Dhaa)', soundSymbol: 'dh', englishEquivalent: 'Bet' },
    { id: 18, letter: "ع", transliteration: '(\'Ain)', soundSymbol: '\'a', englishEquivalent: '\'Angry' },
    { id: 19, letter: "غ", transliteration: '(Ghain)', soundSymbol: 'gh', englishEquivalent: '' },
    { id: 20, letter: "ف", transliteration: '(Faa)', soundSymbol: 'f', englishEquivalent: 'Fire' },
    { id: 21, letter: "ق", transliteration: '(Qaaf)', soundSymbol: 'B', englishEquivalent: 'Bet' },
    { id: 22, letter: "ك", transliteration: '(Kaaf)', soundSymbol: 'k', englishEquivalent: 'Kid' },
    { id: 23, letter: "ل", transliteration: '(Laam)', soundSymbol: 'l', englishEquivalent: 'Let' },
    { id: 24, letter: "م", transliteration: '(Miim)', soundSymbol: 'm', englishEquivalent: 'Man' },
    { id: 25, letter: "ن", transliteration: '(Nuun)', soundSymbol: 'n', englishEquivalent: 'Net' },
    { id: 26, letter: "هـ", transliteration: '(Haa)', soundSymbol: 'B', englishEquivalent: 'Bet' },
    { id: 27, letter: "و", transliteration: '(Waaw)', soundSymbol: 'w', englishEquivalent: 'Watch' },
    { id: 28, letter: "ي", transliteration: '(Yaa)', soundSymbol: 'y', englishEquivalent: 'Yet' },
  ];

  const renderLetter = () => {
    const currentLetter = letters[currentLetterIndex];
    return (
      <TouchableOpacity
        style={styles.button}
        key={currentLetter.id}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>{currentLetter.letter}</Text>
        <Text style={styles.buttonText}>{currentLetter.transliteration}</Text>
        <Text style={styles.buttonText}>Sound Symbol : {currentLetter.soundSymbol}</Text>
        <Text style={styles.buttonText}>Phonetic: {currentLetter.englishEquivalent}</Text>
      </TouchableOpacity>
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
  contentContainer: {
    
  },
  title: {
    textAlign: 'center',
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
    display: 'flex',
    alignItems: 'center'
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    marginVertical: 4,
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
