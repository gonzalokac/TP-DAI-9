import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen3A from '../screens/Screen3A';
import Screen3B from '../screens/screen3B';

const Stack = createNativeStackNavigator();

export default function Stack3() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen3A" component={Screen3A} options={{ title: 'Perfil 1' }} />
      <Stack.Screen name="Screen3B" component={Screen3B} options={{ title: 'Perfil 2' }} />
    </Stack.Navigator>
  );
}