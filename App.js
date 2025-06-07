import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import stack1 from './TP-DAI-9/components/stacks/stack1';
import stack2 from './TP-DAI-9/components/stacks/stack2';
import stack3 from './TP-DAI-9/components/stacks/stack3';
import stack4 from './TP-DAI-9/components/stacks/stack4';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1a1a1a',
            borderTopWidth: 0,
            height: 60,
          },
          tabBarActiveTintColor: '#00ffff',
          tabBarInactiveTintColor: '#888',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'stack1':
                iconName = 'home-outline';
                break;
              case 'stack2':
                iconName = 'search-outline';
                break;
              case 'stack3':
                iconName = 'person-outline';
                break;
              case 'stack4':
                iconName = 'settings-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="stack1" component={stack1} />
        <Tab.Screen name="stack2" component={stack2} />
        <Tab.Screen name="stack3" component={stack3} />
        <Tab.Screen name="stack4" component={stack4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
