import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2A from '../screens/Screen2A';
import Screen2B from '../screens/Screen2B';

const Stack = createNativeStackNavigator();

export default function Stack2() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen2A" component={Screen2A} options={{ title: 'Buscar 1' }} />
      <Stack.Screen name="Screen2B" component={Screen2B} options={{ title: 'Buscar 2' }} />
    </Stack.Navigator>
  );
}
