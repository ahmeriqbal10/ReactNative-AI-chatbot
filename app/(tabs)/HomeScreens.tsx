
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from './Styling/Homesreenstyle'; // Import styles from the external styles file

const HomeScreens = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome To SpeechMind</Text>
      <TouchableOpacity style={styles.sendButton} onPress={() => router.push('/Chatbot')}>
        <Text style={styles.sendButtonText}>Click Here To Chat!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreens;
