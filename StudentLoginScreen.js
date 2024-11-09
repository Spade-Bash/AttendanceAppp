// screens/StudentLoginScreen.js
import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';

export default function StudentLoginScreen({ navigation }) {
  useEffect(() => {
    const backAction = () => {
      // Navigate back to the UserSelectionScreen
      navigation.navigate("UserSelection");
      return true; // Prevents default back action
    };

    // Add event listener
    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    // Cleanup the event listener on component unmount
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Login</Text>
      
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('StudentDashboard')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpLink} onPress={() => navigation.navigate('StudentSignup')}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f9', // Light background color
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#4e73df',
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signUpLink: {
    marginTop: 10,
  },
  signUpText: {
    color: '#007bff',
    fontSize: 16,
  },
});
