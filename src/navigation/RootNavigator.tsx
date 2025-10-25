import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/login/login';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
