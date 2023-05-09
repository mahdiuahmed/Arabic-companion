import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Lesson = ({route, navigation}) => {

  const { title } = route.params;

  const learnContent = () => {
    // navigate to the lesson quiz/game screen
    navigation.navigate('LearnContent', { title });
  };
  const testContent = () => {
    // navigate to the lesson quiz/game screen
    navigation.navigate('TestContent', { title });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.duration}>Estimated duration: 20 minutes</Text>
      <TouchableOpacity style={styles.buttonLearn} onPress={learnContent}>
        <Text style={styles.buttonText}>LEARN CONTENT</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonQuiz} onPress={testContent} >
        <Text style={styles.buttonText}>START QUIZ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lesson;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'poppinsBold',
  },
  duration: {
    marginVertical: 10,
  },
  buttonLearn: {
    padding: 10,
    backgroundColor: '#54BAB9',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonQuiz: {
    padding: 10,
    backgroundColor: '#54BAB9',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});