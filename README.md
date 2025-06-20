# Chatbot Application

## Introduction
This chatbot application is built using React Native and Expo Router. The app enables seamless user interactions with advanced AI models like GPT-4, GPT-4 Turbo, GPT-3.5 Turbo, and **DeepSeek**. Users can ask questions, explore various topics, and receive personalized answers from the chatbot, making it a powerful tool for education, casual conversation, and more.

## Features

- **Multiple AI Models**: Choose from several AI models to enhance conversation quality based on performance needs (e.g., GPT-4 for detailed conversations, GPT-3.5 for quicker responses, and **DeepSeek** for additional chatbot capabilities).
- **User-Friendly Interface**: The app provides a simple interface where users can interact with the chatbot, sending messages and receiving responses, all while maintaining a friendly and intuitive design.
- **Chat History**: The chat is designed to maintain context throughout the conversation, allowing the bot to remember previous messages and provide more relatable and coherent responses.
- **Prompt Suggestions**: Upon first launch, users are greeted with helpful prompt suggestions, making it easier to start a conversation or get recommendations on topics.
- **Model Selection**: The app features a model selection modal, letting users choose which AI model they'd like to converse with, including GPT-4, GPT-3.5, and **DeepSeek**.

## Approach
The application is structured to handle both front-end user interaction and backend AI model selection in a clean, modular way. Here's how the app is designed and how each component plays a role:

### Home Screen (HomeScreens.tsx)
The Home Screen is the main entry point of the app, where users first interact with the application. It features a simple welcome screen with a button labeled "Click Here To Chat!" to navigate to the chatbot page. This screen utilizes basic styles from the `Homesreenstyle.ts` file for a clean and simple interface.

### App Layout and Navigation (_layout.tsx)
- **Layout**: Handles navigation across different screens using React Navigation. Contains the stack navigator, allowing users to smoothly transition between the Home screen and the Chatbot screen without a visible header. The navigation ensures a seamless user experience when moving between the home and chatbot screens.

### Chatbot Screen (Chatbot.tsx)
- **User Interaction**: This is the primary interface where users communicate with the chatbot. Users can type messages, and the chatbot will reply accordingly.
- **Chat History**: One of the standout features is the full chat history that is displayed during the interaction. As the user sends messages, they are added to the chat history, which helps the bot maintain context. This ensures that the conversation feels more natural and consistent, without losing context.
- **Message Sending & Model Interaction**: Users can send a message either by typing directly or selecting from predefined prompts. The selected AI model (e.g., GPT-4, GPT-3.5, or **DeepSeek**) processes the message, and the response is appended to the chat history.
- **Model Selection Modal**: A modal window allows users to choose between various AI models like GPT-4, GPT-4 Turbo, GPT-3.5 Turbo, and **DeepSeek**. This enables users to optimize their experience based on performance needs and response quality.
- **Loading State**: A loading indicator is displayed when the bot is processing the response to ensure users know when the message is being generated.

### Chat API Integration (chatAPI.ts)
Integrates the app with an external chat API to fetch chatbot responses dynamically. The `chatCompletion` function is used to send the user's chat history and selected model to the API and retrieve an AI-generated response. This ensures that the chatbot can respond with context-aware answers based on the full chat history.

### Styling (Homesreenstyle.ts and Chatbotstyle.ts)
- **Home Screen Styles**: Defines the layout and visual design for the home screen, including the welcome text and button styling.
- **Chatbot Styles**: Provides custom styles for the chatbot interface, including message bubbles, input fields, buttons, and chat area scroll views.

## Message Structure and Full Chat History
The application maintains a full chat history throughout the interaction. Each message sent by the user or received from the bot is stored in a state array (`chatHistory`) that maintains the roles (user or assistant) and message content. This chat history helps make the conversation relatable. When the user sends a new message, it is added to the history, and the bot's response follows the previous messages, ensuring the conversation feels contextual and coherent.

## How to Use the App
This is a React Native Chatbot app using Expo and GPT models. The app integrates a chatbot UI, allowing users to interact with AI models like GPT-4, GPT-3.5, GPT-4 Turbo, and **DeepSeek**.


### Prerequisites
Before you start, make sure you have the following installed:
- **Node.js** - Download Node.js
- **Expo CLI** - Install it globally by running:
  ```bash
  npm install -g expo-cli
## Getting Started
Follow these steps to set up and run the project locally:

1. **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2. **Install dependencies**:
    Run the following command to install the necessary dependencies:
    ```bash
    npm install
    ```
    Or if you are using yarn:
    ```bash
    yarn install
    ```

3. **Run the application**:
    - For Android:
      ```bash
      expo start --android
      ```
    - For iOS:
      ```bash
      expo start --ios
      ```
    - For Web:
      ```bash
      expo start --web
      ```

Ensure the app is running on your device/emulator. Open the app using the Expo Go app on your mobile device, or run it in an Android/iOS emulator.

## API Integration
This project uses the **Chat Completion API** to interact with AI models. You need an **API key** to interact with the service.

### Getting the API Key and Endpoint

- **OpenAI API (For GPT Models)**  
    - **API Endpoint**: The API URL for this project is:
      ```bash
      API_URL = 'https://api.openai.com/v1/completions';
      ```
    - **API Key**: To obtain your API key:
        1. Visit the [OpenAI API Platform](https://beta.openai.com/signup/).
        2. Sign up for an account (if you don't have one).
        3. After signing in, go to the **API Keys** section and create a new API key.

- **Hugging Face API (For DeepSeek Model)**  
    - **API Endpoint**: The API URL for DeepSeek model is:
      ```bash
      API_URL = 'https://api-inference.huggingface.co/models/deepseek-ai/DeepSeek-R1-0528';
      ```
    - **API Key**: To obtain your Hugging Face API key:
        1. Visit the [Hugging Face API Platform](https://huggingface.co/).
        2. Sign up or log in.
        3. After logging in, go to **Settings > Access Tokens** and create a new token.

### API Constants
In this project, we store API-related configurations in `Constants.ts`. Update the `Constants.ts` file with your API key and endpoint.



