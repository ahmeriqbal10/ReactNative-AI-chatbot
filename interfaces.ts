// interfaces.ts

// Interface to define the structure of a message
export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
  }
// Interface to define the structure of an AI model used for chat
  export interface Model {
    id: string;
    name: string;
    description: string;
  }
  