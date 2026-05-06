import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Shield, Star } from 'lucide-react-native';

// Importando as Telas
import PokedexScreen from '../screens/PokedexScreen';
import TeamScreen from '../screens/TeamScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Esconde o cabeçalho padrão de cada tela
        tabBarActiveTintColor: '#EF5350', // Cor do ícone selecionado
        tabBarInactiveTintColor: '#9E9E9E', // Cor do ícone não selecionado
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10, // Sombra no Android
          shadowOpacity: 0.1, // Sombra no iOS
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        }
      }}
    >
      <Tab.Screen 
        name="Pokedex" 
        component={PokedexScreen} 
        options={{
          tabBarLabel: 'Pokédex',
          tabBarIcon: ({ color, size }) => <Shield color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name="Team" 
        component={TeamScreen} 
        options={{
          tabBarLabel: 'Minha Equipe',
          tabBarIcon: ({ color, size }) => <Star color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );
}