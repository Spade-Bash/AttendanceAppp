import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';

export default function StudentSignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("UserSelection"); // Go back to UserSelectionScreen
      return true; // Prevents default back action
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, [navigation]);

  const handleSignUp = () => {
    // Reset fields after successful sign-up (for now, it's a placeholder)
    setFirstName('');
    setMiddleInitial('');
    setLastName('');
    setStudentId('');
    setEmail('');
    setPassword('');

    // Navigate to the Student Dashboard
    navigation.replace('StudentDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Sign Up</Text>

      <TextInput
        placeholder="First Name"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />
      
      <TextInput
        placeholder="Middle Initial"
        style={styles.input}
        value={middleInitial}
        onChangeText={setMiddleInitial}
      />
      
      <TextInput
        placeholder="Last Name"
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
      />
      
      <TextInput
        placeholder="Student ID"
        style={styles.input}
        value={studentId}
        onChangeText={setStudentId}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('StudentLogin')}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f9',
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
  loginLink: {
    marginTop: 10,
  },
  loginText: {
    color: '#007bff',
    fontSize: 16,
  },
});
