import React from 'react';
import { Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>About This App</Text>
      <Text style={{ fontSize: 18 }}>App Name: To-Do App</Text>
      <Text style={{ fontSize: 18 }}>Developer: Colin Ly</Text>
      <Text style={{ fontSize: 18 }}>Date: {currentDate}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
