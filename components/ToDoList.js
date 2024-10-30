import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function ToDoList({ tasks, styles }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text> 
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
