// Importing necessary libraries
import axios from 'axios';
import { Alert } from 'react-native';
import { OPENAI_API_KEY, OPENAI_API_URL ,DEEPSEEK_KEY,DEEPSEEK_URL} from './Constants';
import { Message } from './interfaces';

// Sugesstion prompts for the user to select
const examplePrompts = [
  "How can I stay motivated? ",
  "Can you help me plan my day?",
  "Help me plan a healthy weekly meal schedule",
  "What are the latest trends in technology?",
  "Can you tell me a fun fact?"
];

// Function to remove think tags from the response
const removeThinkTags = (text: string): string => {
// Remove content between <think> and </think> tags 
  return text.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
};

// Function to interact with the OpenAI API and get a response
const chatCompletion = async (messages: Message[], model: string): Promise<string> => {
    var url: string = "";
    var key: string = "";
  try {
    // Get the last message in the conversation
    if (model== "DeepSeek-R1-0528") {
      url= DEEPSEEK_URL; // Use the model in the URL for DeepSeek
      key = DEEPSEEK_KEY; // Use the DeepSeek API key
    }else{
      url = OPENAI_API_URL; // Use the OpenAI API URL for other models
      key = OPENAI_API_KEY; // Use the OpenAI API key
    }
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
    console.log(key,url);
    // Make the API request 
    const response = await axios.post(
      url,
      {
        model: model,
        messages: processedMessages, 
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${key}`,
        },
      }
    );
    
    const rawResponse = response.data.choices[0].message.content;
    
    // Remove think tags from the response before returning
    return removeThinkTags(rawResponse);
  } catch (error) {
    console.error('Error with OpenAI Chat API:', error);
    Alert.alert('Error', 'Failed to get response. Please try again.');
    throw error;
  }
};

export { chatCompletion };