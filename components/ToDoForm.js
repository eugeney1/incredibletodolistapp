import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

export default function ToDoForm({ styles, addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') return; // Prevent adding empty tasks
    addTask(taskText.trim()); // Pass the task to the parent
    setTaskText(''); // Clear input field after adding
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={setTaskText}
        value={taskText}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}


