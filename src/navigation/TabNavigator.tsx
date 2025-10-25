import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/app/HomeScreen';
import CourseScreen from '../screens/app/CourseScreen';
import SearchScreen from '../screens/app/SearchScreen';
import MessageScreen from '../screens/app/MessageScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import  Ionicons  from '@react-native-vector-icons/ionicons';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Course':
              iconName = 'book-outline';
              break;
            case 'Search':
              iconName = 'search-outline';
              break;
            case 'Message':
              iconName = 'chatbubble-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'alert-circle-outline';
          }

          return <Ionicons name={iconName } size={size} color={color} />;
        },
      })}
    >

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Course" component={CourseScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
