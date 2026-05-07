import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonDetailScreen from '../screens/PokemonDetailScreen';

const Stack = createNativeStackNavigator();

export default function PokedexStack() {
  return (
    <Stack.Navigator>
      {/* Tela inicial da pilha */}
      <Stack.Screen 
        name="List" 
        component={PokedexScreen} 
        options={{ headerShown: false }} // Esconde o cabeçalho na lista
      />
      {/* Tela de detalhes */}
      <Stack.Screen 
        name="Detail" 
        component={PokemonDetailScreen} 
        options={({ route }) => ({ 
          title: route.params.name.toUpperCase(), // Título dinâmico
          headerBackTitle: 'Voltar',
          headerTintColor: '#EF5350'
        })} 
      />
    </Stack.Navigator>
  );
}