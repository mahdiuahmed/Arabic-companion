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

const HomeScreen = ({ navigation }) => {
  const [name, setname] = useState("");
  const handleLessonPress = (lesson) => {
    navigation.navigate("Lesson", { title: lesson.title });
  };

  const list = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    
    //console.log(voices);
  };



  const lessons = [
    {
      title: "Lesson 1: Arabic Alphabet\nAlif to Thaa (ا - ث)",
      duration: "20 minutes",
    },
    {
      title: "Lesson 2: Arabic Alphabet\nJeem to Daal (ج - د)",
      duration: "15 minutes",
    },
    {
      title: "Lesson 3: Arabic Alphabet\nThaal to Seen (ذ - س)",
      duration: "15 minutes",
    },
    {
      title: "Lesson 4: Arabic Alphabet\nSheen to Taa' (س - ط)",
      duration: "15 minutes",
    },
    {
      title: "Lesson 5: Arabic Alphabet\nDhaa' to Faa (ظ - ف)",
      duration: "15 minutes",
    },
    {
      title: "Lesson 6: Arabic Alphabet\nQaaf to meem (ق - م)",
      duration: "15 minutes",
    },
    {
      title: "Lesson 7: Arabic Alphabet\nNuun to Yaa (ن - ي)",
      duration: "15 minutes",
    },
    {
      title: "Lesson 7: Arabic Alphabet\nNuun to Yaa (ن - ي)",
      duration: "15 minutes",
    },
    {
      title: "Lesson 7: Arabic Alphabet\nNuun to Yaa (ن - ي)",
      duration: "15 minutes",
    },
    {
      title: "Lesson 7: Arabic Alphabet\nNuun to Yaa (ن - ي)",
      duration: "15 minutes",
    },
    // more lessons here
  ];

  const handlePress = () => {
    options = {
      voice: "ar-xa-x-ard-local",
      pitch: 1,
      rate: 0.2,
    };

    Speech.speak(name, options);
  };

  const getUser = getAuth();
  const user = auth.currentUser;

  return (
    <View>
      <ScrollView contentContainerStyle={{ alignItems: 'stretch', marginTop: 16,}}>
        {lessons.map((lesson, index) => (
          <TouchableOpacity
          key={index}
            onPress={() => handleLessonPress(lesson)}
            >
            <View style={styles.lessonsContainer} key={index}>
              <Text style={styles.lessonsTitle}>{lesson.title}</Text>
              <Text style={styles.lessonsDuration}>
                Duration: {lesson.duration}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        </ScrollView>
      
      {/* <Input onChangeText={setname} value={name} /> */}
      {/* <Button title="Speak Arabic Word" onPress={handlePress} /> */}
      {/* <Text>{user.email}</Text> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  lessonsContainer: {
    padding: 10,
    marginVertical:10,
    marginLeft: 16,
    backgroundColor: "#54BAB9",
    borderRadius: 10,
    width: '75%'
  },
  lessonsTitle: {
    fontSize: 18,
    fontFamily: 'poppinsBold',
    color: "white",
  },
  lessonsDuration: {
    color: "white",
    fontFamily: 'poppinsRegular'
  },
});
