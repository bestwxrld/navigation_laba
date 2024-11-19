import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './screens/AboutScreen';
import LanguagesScreen from './screens/LanguagesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О себе" component={AboutScreen} />
        <Tab.Screen name="Мои языки" component={LanguagesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}