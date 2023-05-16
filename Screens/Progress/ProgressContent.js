import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { auth, db } from "../../Firebase";
import { lessons } from "../../AllLessons";

const ProgressContent = ({ route, navigation }) => {
  const { title } = route.params;
  const { id } = route.params;
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const q = query(
      collection(
        db,
        "users",
        auth.currentUser.uid,
        "Lesson " + lessons[id].id + " correct answers"
      )
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const correctAnswers = snapshot.docs.map(
        (doc) => doc.data().CorrectAnswers.answer
      );
      setCorrectAnswers(correctAnswers);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const q = query(
      collection(
        db,
        "users",
        auth.currentUser.uid,
        "Lesson " + lessons[id].id + " incorrect answers"
      )
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const incorrectAnswers = snapshot.docs.map(
        (doc) => doc.data().IncorrectAnswers.answer
      );
      setIncorrectAnswers(incorrectAnswers);
    });
    return unsubscribe;
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Content</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Words Correct:</Text>
        <Text style={styles.answer}>{correctAnswers.join(", ")}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Words Incorrect:</Text>
        <Text style={styles.answer}>{incorrectAnswers.join(", ")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  answer: {
    fontSize: 18,
  },
});

export default ProgressContent;
