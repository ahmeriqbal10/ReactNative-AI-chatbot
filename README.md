# Chatbot App

## Introduction
This is a simple Chatbot app built with React Native Expo. It provides a seamless user experience with a chatbot powered by DeepSeek and ChatGPT via HuggingFace and OpenAI APIs. The app is mobile responsive and offers an intuitive interface for both Android and iOS users.

## Screens

### 1. **Home Screen (HomeScreen.tsx)**

#### Functionality:
- Serves as the entry point of the app.
- Contains a button labeled **"Click Here To Chat!"** that navigates the user to the **Chatbot screen**.
- Layout is **mobile responsive**, ensuring smooth navigation across devices (iPhone and Android).
- Utilizes basic styling from **HomeScreenStyle.ts** for a clean and intuitive interface.
- No external libraries were used for advanced design components.

#### Key Features:
- **Mobile Responsive**: Efficient navigation on any device.
- **Simple and User-friendly Interface**: Easy transition between screens and intuitive design.

#### Navigation:
- **Expert Router** is used for smooth transitions.
- **React Router** is implemented to ensure proper navigation flow between the Home Screen and Chatbot Screen.

---

### 2. **Chatbot Screen (Chatbot.tsx)**

#### User Interaction:
- Provides a primary interface for users to interact with the bot.
- Users type messages, and the bot responds based on the provided context.

#### Chat History:
- Maintains chat history to ensure the bot tracks ongoing conversations.
- Sends the **entire chat history** to the LLM model to maintain context across interactions.

#### Message Sending & Model Interaction:
- Integrates **DeepSeek** and **ChatGPT** via HuggingFace and OpenAI APIs.
- Ensures context relevance by sending the full chat history to the model with each new message.
- Both models generate responses based on user inputs, providing contextual answers.

---

## Technical Approach

### APIs Used:
- **HuggingFace API** for integrating **DeepSeek**.
- **OpenAI API** for integrating **ChatGPT**.

### Handling Chatbot Memory:
- To address the issue of the bot forgetting previous messages, the app sends the **entire chat history** to the LLM model every time the user sends a new message. This ensures that the bot maintains context throughout the conversation.

### UI Design:
- The app's UI is custom-styled using basic React Native components and **Expo**.
- Focuses on a **clean, simple, and mobile-responsive design** without the use of external styling libraries.

### Testing:
- The app has been tested on both **Android and iOS devices** using **Expo** to ensure a smooth user experience.

---


### Prerequisites
Before you start, make sure you have the following installed:
- **Node.js** 
- **Expo CLI** 
  
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
      API_URL = 'https://api.openai.com/v1/chat/completions';
      ```
    - **API Key**: To obtain your API key:
        1. Visit the [OpenAI API Platform](https://beta.openai.com/signup/).
        2. Sign up for an account (if you don't have one).
        3. After signing in, go to the **API Keys** section and create a new API key.

- **Hugging Face API (For DeepSeek Model)**  
    - **API Endpoint**: The API URL for DeepSeek model is:
      ```bash
      API_URL = 'https://router.huggingface.co/sambanova/v1/chat/completions';
      ```
    - **API Key**: To obtain your Hugging Face API key:
        1. Visit the [Hugging Face API Platform](https://huggingface.co/).
        2. Sign up or log in.
        3. After logging in, go to **Settings > Access Tokens** and create a new token.

### API Constants
In this project, we store API-related configurations in `Constants.ts`. Update the `Constants.ts` file with your API key and endpoint.



