import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <View>
      {tasks.map((task, index) => (
        <View
          key={index}
          style={[
            styles.task,
            task.completed ? styles.completed : null,
          ]}
        >
          <Text style={styles.taskText}>{task.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ToDoList;
