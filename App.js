import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import HomeScreen from './src/HomeScreen';

export default function App() {
  return (
 <NavigationContainer>
  <Stack.Navigator initialRouteName="home">
    <Stack.Screen name="Home" component={HomeScreen} options={{"title":"Amazon BookStore"}} />
  </Stack.Navigator>
 </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
