import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Info } from 'lucide-react-native';

// Importamos o TabNavigator (que já contém o Stack)
import TabNavigator from './TabNavigator';
// Uma tela simples de "Sobre o App"
import AboutScreen from '../screens/AboutScreen'; 

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      screenOptions={{ 
        headerStyle: { backgroundColor: '#EF5350' },
        headerTintColor: '#FFF'
      }}
    >
      {/* O menu inicial carrega as Abas */}
      <Drawer.Screen 
        name="Home" 
        component={TabNavigator} 
        options={{ 
          drawerLabel: 'Início',
          title: 'App Pokémon',
          drawerIcon: ({ color }) => <Home color={color} />
        }} 
      />
      {/* Uma opção isolada no menu lateral */}
      <Drawer.Screen 
        name="About" 
        component={AboutScreen} 
        options={{ 
          drawerLabel: 'Sobre',
          title: 'Sobre o Projeto',
          drawerIcon: ({ color }) => <Info color={color} />
        }} 
      />
    </Drawer.Navigator>
  );
}