import React from 'react';
import { TouchableOpacity, ScrollView, Text, View } from 'react-native';

export default function ToDoList({ tasks, styles }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <TouchableOpacity key={index}>
          <View style={[styles.task, task.completed && styles.completed]}>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

