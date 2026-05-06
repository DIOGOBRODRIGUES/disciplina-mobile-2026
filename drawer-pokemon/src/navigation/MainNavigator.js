// src/navigation/MainNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Shield } from 'lucide-react-native'; // Ícones

// Importando as Telas
import HomeScreen from '../screens/HomeScreen';
import PokedexScreen from '../screens/PokedexScreen';

const Drawer = createDrawerNavigator();

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Início"
      screenOptions={{
        headerStyle: { backgroundColor: '#EF5350' },
        headerTintColor: '#fff',
        drawerActiveTintColor: '#EF5350',
      }}
    >
      <Drawer.Screen 
        name="Início" 
        component={HomeScreen} 
        options={{
          drawerIcon: ({ color, size }) => <Home color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name="Pokédex Completa" 
        component={PokedexScreen} 
        options={{
          drawerIcon: ({ color, size }) => <Shield color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  );
}