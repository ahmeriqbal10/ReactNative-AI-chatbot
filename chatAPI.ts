// Importing necessary libraries
import axios from 'axios';
import { Alert } from 'react-native';
import { OPENAI_API_KEY, OPENAI_API_URL } from './Constants';
import { Message } from './interfaces'; // Import the Message interface
// Example prompts for the user to select
const examplePrompts = [
  "How can I stay motivated? ",
  "Can you help me plan my day?",
  "Help me plan a healthy weekly meal schedule",
  "What are the latest trends in technology?",
  "Can you tell me a fun fact?"
];
// Function to interact with the OpenAI API and get a response
const chatCompletion = async (messages: Message[], model: string): Promise<string> => {
  try {
    // Get the last message in the converstion
    const lastMessage = messages[messages.length - 1];
    let processedMessages = [...messages];

    if (lastMessage && lastMessage.role === 'user') {
      const messageContent = lastMessage.content.trim();
      const numberMatch = messageContent.match(/^[1-5]$/);
      
      if (numberMatch) {
        const promptIndex = parseInt(numberMatch[0]) - 1;
        processedMessages[processedMessages.length - 1] = {
          ...lastMessage,
          content: examplePrompts[promptIndex]
        };
      }
    }
// Make the API request 
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: model,
        messages: processedMessages, 
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );
    
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error with OpenAI Chat API:', error);
    Alert.alert('Error', 'Failed to get response. Please try again.');
    throw error;
  }
};

export { chatCompletion };