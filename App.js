import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, TextInput, View } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: false },
    { text: 'Go to gym', completed: true },
    { text: 'Walk dog', completed: false },
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    // Prevent duplicates and empty tasks
    if (!taskText || tasks.some((task) => task.text === taskText)) return;

    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Display the ToDo list */}
      <ToDoList tasks={tasks} styles={styles} />

      {/* Add tasks via the ToDoForm */}
      <ToDoForm styles={styles} addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
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

export default App;
