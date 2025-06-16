import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Ensure proper import

interface ModelSettingsProps {
  onModelChange: (model: string) => void;
}

const ModelSettings: React.FC<ModelSettingsProps> = ({ onModelChange }) => {
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo');

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    onModelChange(model);  // Notify the parent component of the selected model
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select LLM Model</Text>
      <Picker
        selectedValue={selectedModel}
        style={[styles.picker, Platform.OS === 'ios' && styles.iosPicker]}  // Apply iOS-specific styling if needed
        onValueChange={(itemValue) => handleModelChange(itemValue)}
      >
        <Picker.Item label="GPT-3.5" value="gpt-3.5-turbo" />
        <Picker.Item label="GPT-4" value="gpt-4" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F0F0F0',
    height:0,
  },
  title: {
    fontSize: 20,

    fontWeight: 'bold',
  },
  picker: {
    height: 0,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  iosPicker: {
    borderWidth: 0,  // Additional styling for iOS to ensure it's rendered correctly
    borderColor: '#ddd',
    borderRadius: 12,
    backgroundColor: 'Black', 
    height:0, // Ensure a background color for iOS
  }
});

export default ModelSettings;
