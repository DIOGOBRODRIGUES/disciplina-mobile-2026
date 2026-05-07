import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Shield, Star } from 'lucide-react-native';

// IMPORTAMOS O STACK NO LUGAR DA TELA DIRETA!
import PokedexStack from './PokedexStack'; 
import TeamScreen from '../screens/TeamScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#EF5350' }}>
      {/* A primeira aba agora carrega toda a pilha de navegação */}
      <Tab.Screen 
        name="PokedexTab" 
        component={PokedexStack} 
        options={{ tabBarLabel: 'Pokédex', tabBarIcon: ({ color }) => <Shield color={color} /> }}
      />
      <Tab.Screen 
        name="TeamTab" 
        component={TeamScreen} 
        options={{ tabBarLabel: 'Equipe', tabBarIcon: ({ color }) => <Star color={color} /> }}
      />
    </Tab.Navigator>
  );
}