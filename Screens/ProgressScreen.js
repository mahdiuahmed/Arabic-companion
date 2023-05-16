import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { lessons } from '../AllLessons';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { auth, db } from '../Firebase';

const ProgressScreen = ({ navigation }) => {
  const handleLessonPress = (lesson) => {
    navigation.navigate('ProgressContent', { id: lesson.id - 1, title: lesson.title });
  };


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {lessons.map((lesson, index) => (
          <TouchableOpacity key={index} onPress={() => handleLessonPress(lesson)}>
            <View style={styles.lessonsContainer} key={index}>
              <View style={styles.lessonsInfoContainer}>
                <Text style={styles.lessonsTitle}>{lesson.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5F6F4',
  },
  contentContainer: {
    alignItems: 'stretch',
    marginTop: 16,
    paddingBottom: 16,
  },
  lessonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginVertical: 10,
    backgroundColor: '#0b7e7f',
    borderRadius: 10,
  },
  lessonsInfoContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  lessonsTitle: {
    fontSize: 18,
    fontFamily: 'poppinsBold',
    color: 'white',
  },
  lessonsDuration: {
    fontSize: 14,
    fontFamily: 'poppinsRegular',
    color: 'white',
    marginTop: 4,
  },
  lessonsStatusContainer: {
    flex: 1,
    alignItems: 'center',
  },
  lessonsStatus: {
    fontSize: 24,
    fontFamily: 'poppinsBold',
    color: 'white',
  },
});

export default ProgressScreen;
