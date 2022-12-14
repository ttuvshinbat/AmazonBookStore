import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import useCategory from './src/hooks/useCategory';
import Search from './src/components/Search';
import HomeScreen from './src/Screens/HomeScreen';
import BookDetailScreen from './src/Screens/BookDetailScreen';
import { Button, Alert } from 'react-native';
const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3298DB" },
          headerTitleAlign: "center",
          headerTintColor: "white"
        }} initialRouteName="home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={({ navigation }) => ({
            "title": "Amazon BookStore",
            headerRight: () => (<Button title="Cart1" onPress={() => navigation.navigate("detail", { id: "63426c6f1e702e48f0f8aa1f" })} />),

          })} />
        <Stack.Screen name="detail" component={BookDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});
