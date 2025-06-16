import axios from 'axios';
import { Alert } from 'react-native';
import { OPENAI_API_KEY, OPENAI_API_URL } from '../../Constants';

const chatCompletion = async (message: string, model: string): Promise<string> => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: model,
        messages: [{ role: 'user', content: message }],
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