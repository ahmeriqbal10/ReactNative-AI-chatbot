import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Modal, SafeAreaView, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { styles } from '../../Styling/Chatbotstyle';
import { Message, Model } from '../../interfaces'; 
import { chatCompletion } from '../../chatAPI'; 

const Chatbot = () => {
// States to manage various data
  const [userMessage, setUserMessage] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<Message[]>([
    { role: 'system', content: 'Hello! How can I assist you today?' },
  ]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedModel, setSelectedModel] = useState<string>('gpt-4');
  const [showModelModal, setShowModelModal] = useState<boolean>(false);
  const [showPromptSuggestions, setShowPromptSuggestions] = useState<boolean>(true);
  const router = useRouter();

  
// AI models available for selection
  const models: Model[] = [
    { id: 'gpt-4', name: 'GPT-4', description: 'Most capable model' },
    { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', description: 'Faster and more efficient' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: 'Fast and cost-effective' },
  ];

// Example prompts to show when the chat is first started
  const examplePrompts: string[] = [
    "How can I stay motivated?",
    "Can you help me plan my day?",
    "Help me plan a healthy weekly meal schedule",
    "What are the latest trends in technology?",
    "Can you tell me a fun fact?"
  ];

// Function to handle sending messages to the chatbot
  const handleSendMessage = async (message?: string): Promise<void> => {
    const messageToSend = message || userMessage;
    if (messageToSend.trim() === '') return;

// Hide prompt suggestions after first message
    if (showPromptSuggestions) {
      setShowPromptSuggestions(false);
    }
// Add the user's message to the chat history to maintain context
    const newChatHistory: Message[] = [...chatHistory, { role: 'user', content: messageToSend }];
    setChatHistory(newChatHistory);
    setUserMessage('');
    setLoading(true);

    try {
// Get the bot's response using the chat API
      const botResponse = await chatCompletion(
        [...newChatHistory, { role: 'user', content: messageToSend }],
        selectedModel
      );
// Updateing the chat history with the assistant's reply
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
// Function to handle prompt selection
  const handlePromptSelection = (prompt: string): void => {
    handleSendMessage(prompt);
  };
// Function to handle model selection from the modal
  const selectModel = (modelId: string): void => {
    setSelectedModel(modelId);
    setShowModelModal(false);
  };
// Function to get the name of the currently selected model
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
          

          {showPromptSuggestions && chatHistory.length === 1 && (
            <View style={styles.messageContainer}>
              <Text style={styles.messageText}>
                You can try these suggestions:{'\n\n'}
                {examplePrompts.map((prompt, index) => (
                  `${index + 1}. ${prompt}\n\n`
                )).join('').trim()}
                {'\n\n'}Just type the number (1-5) or ask your own question!
              </Text>
            </View>
          )}

          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#007AFF" />
              <Text style={styles.loadingText}>Thinking...</Text>
            </View>
          )}
        </ScrollView>


        <View style={styles.inputArea}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type your message or number (1-5)..."
              placeholderTextColor={'black'}
              value={userMessage}
              onChangeText={setUserMessage}
              multiline
              maxLength={1000}
              returnKeyType="send"
              onSubmitEditing={() => handleSendMessage()}
            />
            <TouchableOpacity
              style={[styles.sendButton, loading && styles.sendButtonDisabled]}
              onPress={() => handleSendMessage()}
              disabled={loading || userMessage.trim() === ''}
            >
              <Icon name="send" size={20} color={loading || userMessage.trim() === '' ? '#ccc' : 'white'} />
            </TouchableOpacity>
          </View>
        </View>

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