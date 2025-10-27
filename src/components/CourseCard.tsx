import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface CourseCardProps {
  title: string;
  subtitle: string;
  image: string;
  backgroundColor: string;
  onPress: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  subtitle,
  image,
  backgroundColor,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor }]} onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});

export default CourseCard;
