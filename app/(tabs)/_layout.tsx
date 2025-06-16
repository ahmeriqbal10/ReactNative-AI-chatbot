import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import { useRouter } from 'expo-router';
import HomeScreen from './HomeScreens'; 
import Chatbot from './Chatbot'; 

const Stack = createStackNavigator(); 

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Chatbot"
        component={Chatbot}
      />
    </Stack.Navigator>
  );
}
