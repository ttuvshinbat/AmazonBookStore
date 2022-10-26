import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import useCategory from './src/hooks/useCategory';
import Search from './src/components/Search';
import HomeScreen from './src/Screens/HomeScreen';
import BookDetailScreen from './src/Screens/BookDetailScreen';
const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ "title": "Amazon BookStore" }} />
        <Stack.Screen name="detail" component={BookDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
