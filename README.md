# React Native Chatbot Project

This is a React Native Chatbot app using **Expo** and **GPT models**. The app integrates a chatbot UI, allowing users to interact with AI models like GPT-4, GPT-3.5, and GPT-4 Turbo.

## Prerequisites

Before you start, make sure you have the following installed:

1. **Node.js** - [Download Node.js](https://nodejs.org/)
2. **Expo CLI** - Install it globally by running:

    ```bash
    npm install -g expo-cli
    ```

3. **React Native Environment** (for iOS or Android development) - Follow the official [React Native Environment Setup Guide](https://reactnative.dev/docs/environment-setup).

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2. **Install dependencies:**

    Run the following command to install the necessary dependencies:

    ```bash
    npm install
    ```

    Or if you are using yarn:

    ```bash
    yarn install
    ```

3. **Run the application:**

    - For **Android**:

    ```bash
    expo start --android
    ```

    - For **iOS**:

    ```bash
    expo start --ios
    ```

    - For **Web**:

    ```bash
    expo start --web
    ```

4. **Ensure the app is running on your device/emulator**. Open the app using the Expo Go app on your mobile device, or run it in an Android/iOS emulator.

## API Integration

This project uses the **Chat Completion API** to interact with AI models. You need an API key to interact with the service.

### Getting the API Key and Endpoint

1. **API Endpoint:**  
   The API URL for this project is:
   API_URL = 'https://api.openai.com/v1/completions';

2. **API Key:**  
To obtain your API key:

- Visit the [OpenAI API Platform](https://beta.openai.com/signup/).
- Sign up for an account (if you don’t have one).
- After signing in, go to the **API Keys** section and create a new API key.

3. **API Constants**:  
In this project, we store API-related configurations in `Constants.ts`. Update the `Constants.ts` file with the following:

```ts
