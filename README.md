Chatbot Application
Introduction :-
This is a modern AI-powered chatbot application built using React Native and Expo Router. The app enables seamless user interactions with advanced AI models like GPT-4, GPT-4 Turbo, and GPT-3.5 Turbo. Users can ask questions, explore various topics, and receive personalized answers from the chatbot, making it a powerful tool for education, casual conversation, and more.

Features :-
Multiple AI Models: Choose from several AI models to enhance conversation quality based on performance needs (e.g., GPT-4 for detailed conversations, GPT-3.5 for quicker responses).

User-Friendly Interface: The app provides a simple interface where users can interact with the chatbot, sending messages and receiving responses, all while maintaining a friendly and intuitive design.

Chat History: The chat is designed to maintain context throughout the conversation, allowing the bot to remember previous messages and provide more relatable and coherent responses.

Prompt Suggestions: Upon first launch, users are greeted with helpful prompt suggestions, making it easier to start a conversation or get recommendations on topics.

Model Selection: The app features a model selection modal, letting users choose which AI model they’d like to converse with.

Approach :-
The application is structured to handle both front-end user interaction and backend AI model selection in a clean, modular way. Here's how the app is designed and how each component plays a role:

1. Home Screen (HomeScreens.tsx):
Home Screen is the main entry point of the app, where users first interact with the application.

Features a simple welcome screen with a button labeled "Click Here To Chat!" to navigate to the chatbot page.

This screen utilizes basic styles from the Homesreenstyle.ts file for a clean and simple interface.

2. App Layout and Navigation (_layout.tsx):
layout Handles navigation across different screens using React Navigation.

Contains the stack navigator, allowing users to smoothly transition between the Home screen and the Chatbot screen without a visible header.

The navigation ensures a seamless user experience when moving between the home and chatbot screens.

3. Chatbot Screen (Chatbot.tsx):
User Interaction: This is the primary interface where users communicate with the chatbot. Users can type messages, and the chatbot will reply accordingly.

Chat History: One of the standout features is the full chat history that is displayed during the interaction. As the user sends messages, they are added to the chat history, which helps the bot maintain context. This ensures that the conversation feels more natural and consistent, without losing context.

Message Sending & Model Interaction: Users can send a message either by typing directly or selecting from predefined prompts. The selected AI model (e.g., GPT-4, GPT-3.5) processes the message, and the response is appended to the chat history.

Model Selection Modal: A modal window allows users to choose between various AI models like GPT-4, GPT-4 Turbo, and GPT-3.5 Turbo. This enables users to optimize their experience based on performance needs and response quality.

Loading State: A loading indicator is displayed when the bot is processing the response to ensure users know when the message is being generated.

4. Chat API Integration (chatAPI.ts):
Integrates the app with an external chat API to fetch chatbot responses dynamically.

The chatCompletion function is used to send the user’s chat history and selected model to the API and retrieve an AI-generated response.

Ensures that the chatbot can respond with context-aware answers based on the full chat history.

5. Styling (Homesreenstyle.ts and Chatbotstyle.ts):
Home Screen Styles: Defines the layout and visual design for the home screen, including the welcome text and button styling.

Chatbot Styles: Provides custom styles for the chatbot interface, including message bubbles, input fields, buttons, and chat area scroll views.

6. Message Structure and Full Chat History:
The application maintains a full chat history throughout the interaction.

Each message sent by the user or received from the bot is stored in a state array (chatHistory) that maintains the roles (user or assistant) and message content.

This chat history helps make the conversation relatable. When the user sends a new message, it is added to the history, and the bot’s response follows the previous messages, ensuring the conversation feels contextual and coherent.

How to Use the App
This is a React Native Chatbot app using Expo and GPT models. The app integrates a chatbot UI, allowing users to interact with AI models like GPT-4, GPT-3.5, and GPT-4 Turbo.

Prerequisites
Before you start, make sure you have the following installed:

Node.js - Download Node.js

Expo CLI - Install it globally by running:

npm install -g expo-cli
React Native Environment (for iOS or Android development) - Follow the official React Native Environment Setup Guide.

Getting Started
Follow these steps to set up and run the project locally:

Clone the repository:

git clone <repository_url>
cd <project_directory>
Install dependencies:

Run the following command to install the necessary dependencies:

npm install
Or if you are using yarn:

yarn install
Run the application:

For Android:
expo start --android
For iOS:
expo start --ios
For Web:
expo start --web
Ensure the app is running on your device/emulator. Open the app using the Expo Go app on your mobile device, or run it in an Android/iOS emulator.

API Integration
This project uses the Chat Completion API to interact with AI models. You need an API key to interact with the service.

Getting the API Key and Endpoint
API Endpoint:
The API URL for this project is: API_URL = 'https://api.openai.com/v1/completions';

API Key:
To obtain your API key:

Visit the OpenAI API Platform.
Sign up for an account (if you don’t have one).
After signing in, go to the API Keys section and create a new API key.
API Constants:
In this project, we store API-related configurations in Constants.ts. Update the Constants.ts file with the following: