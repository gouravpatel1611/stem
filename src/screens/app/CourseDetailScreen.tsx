import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CourseDetailScreen = ({ route }: any) => {
  const { title } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>Resources</Text>

      {/* Example Resources */}
      <View style={styles.resource}>
        <Text style={styles.resourceTitle}>📘 Introduction to {title}</Text>
      </View>

      <View style={styles.resource}>
        <Text style={styles.resourceTitle}>🧠 Project Ideas</Text>
      </View>

      <View style={styles.resource}>
        <Text style={styles.resourceTitle}>🔗 Useful Links</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  resource: {
    backgroundColor: '#F5F5F5',
    padding: 14,
    borderRadius: 10,
    marginVertical: 6,
  },
  resourceTitle: {
    fontSize: 15,
  },
});

export default CourseDetailScreen;
