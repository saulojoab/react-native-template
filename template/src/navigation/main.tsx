import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
