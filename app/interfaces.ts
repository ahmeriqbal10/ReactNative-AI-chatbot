// interfaces.ts

export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
  }
  
  export interface Model {
    id: string;
    name: string;
    description: string;
  }
  