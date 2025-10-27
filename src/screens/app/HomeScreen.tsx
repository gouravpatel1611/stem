import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import CourseCard from '../../components/CourseCard'; // adjust path as needed

const HomeScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Status Bar */}
      <StatusBar backgroundColor="#FF3B30" barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Hi, SAI RAM PATRO</Text>
            <Text style={styles.headerSubtitle}>Let's start learning</Text>
          </View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
            }}
            style={styles.profileImage}
          />
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View style={{ flex: 1 }}>
            <Text style={styles.bannerTitle}>What do you want to learn today?</Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5973/5973800.png',
            }}
            style={styles.bannerImage}
          />
        </View>

        {/* Popular Courses */}
        <Text style={styles.sectionTitle}>Our Popular Courses</Text>

        <CourseCard
          title="3D Printing"
          subtitle="Learn 3D Printing Technology"
          image="https://cdn-icons-png.flaticon.com/512/3063/3063173.png"
          backgroundColor="#D8F3DC"
          onPress={() => navigation.navigate('CourseDetail', { title: '3D Printing' })}
        />

        <CourseCard
          title="Arduino Development"
          subtitle="Learn everything about Arduino"
          image="https://cdn-icons-png.flaticon.com/512/4727/4727420.png"
          backgroundColor="#E9D5FF"
          onPress={() =>
            navigation.navigate('CourseDetail', { title: 'Arduino Development' })
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // ✅ handles notch
  },
  header: {
    backgroundColor: '#FF3B30',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  headerSubtitle: {
    color: '#FFECEC',
    fontSize: 14,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  banner: {
    backgroundColor: '#F2F6FF',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 16,
    padding: 16,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  bannerButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: '#FFF',
    fontWeight: '600',
  },
  bannerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 10,
    color: '#111',
  },
});

export default HomeScreen;
