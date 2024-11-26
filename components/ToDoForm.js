import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleAddTask = () => {
    // Trim the input to remove extra spaces
    const trimmedText = text.trim();

    // Check if the trimmed input is empty
    if (!trimmedText) {
      Alert.alert('Invalid Task', 'Task cannot be empty or just spaces.');
      return;
    }

    // Add the valid task
    addTask(trimmedText);
    setText(''); // Clear the input field
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;