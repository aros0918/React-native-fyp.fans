import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LogInPage';
import SignupPage from './pages/SignUpPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Main" component={MainPage}  options={{
            headerShown: false,
          }} />
        <Stack.Screen name = "Signup" component={SignupPage}/>
        <Stack.Screen name = "Login" component={LoginPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screen: {
    fontSize: 0
  }
});
