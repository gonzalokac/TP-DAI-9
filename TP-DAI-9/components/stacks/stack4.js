import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen4A from '../screens/Screen4A';
import Screen4B from '../screens/Screen4B';

const Stack = createNativeStackNavigator();

export default function Stack4() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen4A" component={Screen4A} options={{ title: 'Más 1' }} />
      <Stack.Screen name="Screen4B" component={Screen4B} options={{ title: 'Más 2' }} />
    </Stack.Navigator>
  );
}