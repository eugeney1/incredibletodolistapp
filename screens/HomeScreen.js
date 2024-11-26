import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: false },
    { text: 'Go to gym', completed: true },
    { text: 'Walk dog', completed: false },
  ]);

  const addTask = (taskText) => {
    if (!taskText || tasks.some((task) => task.text === taskText)) return;
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      </SafeAreaView>
    </MainLayout>
  );
};

export default HomeScreen;
