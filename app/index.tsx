
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { styles } from '../Styling/Homesreenstyle';

const Index = () => {
  const router = useRouter();

  return (
  <>
    <Stack.Screen options={{ headerShown: false }} />
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome To SpeechMind</Text>
      <TouchableOpacity style={styles.sendButton} onPress={() => router.push('/Chatbot')}>
        <Text style={styles.sendButtonText}>Click Here To Chat!</Text>
      </TouchableOpacity>
    </View>
  </>
);
}
export default Index;
