import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

// Footer Component
const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2024 Colin Ly</Text>
  </View>
);

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  footer: {
    marginTop: 'auto',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
  },
});

export default MainLayout;
