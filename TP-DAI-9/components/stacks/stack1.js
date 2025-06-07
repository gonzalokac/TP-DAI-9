import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1A from '../screens/Screen1A';
import Screen1B from '../screens/Screen1B';

const Stack = createNativeStackNavigator();

export default function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1A" component={Screen1A} options={{ title: 'Inicio 1' }} />
      <Stack.Screen name="Screen1B" component={Screen1B} options={{ title: 'Detalle 1' }} />
    </Stack.Navigator>
  );
}