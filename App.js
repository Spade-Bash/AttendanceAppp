// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import UserSelectionScreen from './screens/UserSelectionScreen';
import TeacherLoginScreen from './screens/TeacherLoginScreen';
import TeacherSignupScreen from './screens/TeacherSignupScreen';
import StudentLoginScreen from './screens/StudentLoginScreen';
import StudentSignupScreen from './screens/StudentSignupScreen';
import TeacherDashboard from './screens/TeacherDashboard';
import StudentDashboard from './screens/StudentDashboard';

const Stack = createStackNavigator();

export default function App() {
  const [userRole, setUserRole] = useState(null); // Track user role

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserSelection">
        
        {/* User Selection Screen */}
        <Stack.Screen name="UserSelection">
          {props => <UserSelectionScreen {...props} setUserRole={setUserRole} />}
        </Stack.Screen>

        {/* Teacher Screens */}
        <Stack.Screen name="TeacherLogin" component={TeacherLoginScreen} />
        <Stack.Screen name="TeacherSignup" component={TeacherSignupScreen} />
        <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />

        {/* Student Screens */}
        <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
        <Stack.Screen name="StudentSignup" component={StudentSignupScreen} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
