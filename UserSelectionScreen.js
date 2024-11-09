// screens/UserSelectionScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function UserSelectionScreen({ navigation, setUserRole }) {
  const selectTeacher = () => {
    setUserRole('teacher');
    navigation.reset({
      index: 0,
      routes: [{ name: 'TeacherLogin' }],
    });
  };

  const selectStudent = () => {
    setUserRole('student');
    navigation.reset({
      index: 0,
      routes: [{ name: 'StudentLogin' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Please select your role</Text>

      <TouchableOpacity style={styles.buttonTeacher} onPress={selectTeacher}>
        <Text style={styles.buttonText}>I am a Teacher</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonStudent} onPress={selectStudent}>
        <Text style={styles.buttonText}>I am a Student</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Light background color
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  buttonTeacher: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#4e73df',
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonStudent: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#1cc88a',
    borderRadius: 25,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
