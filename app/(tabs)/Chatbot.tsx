// Chatbot.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Modal, SafeAreaView, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { styles } from './Styling/Chatbotstyle'; // Importing styles from the external file
import { Message, Model } from '../interfaces'; // Importing interfaces
import { chatCompletion } from './chatAPI'; // Importing helper function for API calls

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Message[]>([
    { role: 'system', content: 'Hello! How can I assist you today?' },
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedModel, setSelectedModel] = useState<string>('gpt-4');
  const [showModelModal, setShowModelModal] = useState<boolean>(false);
  const router = useRouter();

  const models: Model[] = [
    { id: 'gpt-4', name: 'GPT-4', description: 'Most capable model' },
    { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', description: 'Faster and more efficient' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: 'Fast and cost-effective' },
  ];

  const handleSendMessage = async (): Promise<void> => {
    if (userMessage.trim() === '') return;

    const newChatHistory: Message[] = [...chatHistory, { role: 'user', content: userMessage }];
    setChatHistory(newChatHistory);
    setUserMessage('');
    setLoading(true);

    try {
      const botResponse = await chatCompletion(userMessage, selectedModel);
      setChatHistory([
        ...newChatHistory,
        { role: 'assistant', content: botResponse },
      ]);
    } catch (error) {
      console.error('Error getting response:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectModel = (modelId: string): void => {
    setSelectedModel(modelId);
    setShowModelModal(false);
  };

  const getCurrentModelName = (): string => {
    return models.find((model) => model.id === selectedModel)?.name || 'GPT-4';
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.dismissAll()}
          >
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>

          <Text style={styles.headerText}>SpeechMind</Text>

          <TouchableOpacity
            style={styles.modelButton}
            onPress={() => setShowModelModal(true)}
          >
            <Icon name="settings-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Chat Area */}
        <ScrollView
          style={styles.chatArea}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}
        >
          {chatHistory.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageContainer,
                message.role === 'user' ? styles.userMessage : styles.botMessage,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  message.role === 'user' ? styles.userMessageText : styles.messageText,
                ]}
              >
                {message.content}
              </Text>
            </View>
          ))}
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#007AFF" />
              <Text style={styles.loadingText}>Thinking...</Text>
            </View>
          )}
        </ScrollView>

        {/* Input Area */}
        <View style={styles.inputArea}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type your message..."
              placeholderTextColor={'black'}
              value={userMessage}
              onChangeText={setUserMessage}
              multiline
              maxLength={1000}
              returnKeyType="send"
              onSubmitEditing={handleSendMessage}
            />
            <TouchableOpacity
              style={[styles.sendButton, loading && styles.sendButtonDisabled]}
              onPress={handleSendMessage}
              disabled={loading || userMessage.trim() === ''}
            >
              <Icon name="send" size={20} color={loading || userMessage.trim() === '' ? '#ccc' : 'white'} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Model Selection Modal */}
        <Modal
          visible={showModelModal}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowModelModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Model</Text>
                <TouchableOpacity onPress={() => setShowModelModal(false)}>
                  <Icon name="close" size={24} color="#333" />
                </TouchableOpacity>
              </View>

              {models.map((model) => (
                <TouchableOpacity
                  key={model.id}
                  style={[styles.modelOption, selectedModel === model.id && styles.selectedModel]}
                  onPress={() => selectModel(model.id)}
                >
                  <View style={styles.modelInfo}>
                    <Text style={styles.modelName}>{model.name}</Text>
                    <Text style={styles.modelDescription}>{model.description}</Text>
                  </View>
                  {selectedModel === model.id && <Icon name="checkmark-circle" size={20} color="#007AFF" />}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chatbot;
