import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Star } from 'lucide-react-native';

export default function TeamScreen() {
  return (
    <View style={styles.center}>
      <Star size={64} color="#FBC02D" />
      <Text style={styles.title}>Minha Equipe</Text>
      <Text style={styles.subtitle}>Os Pokémons que você capturar aparecerão aqui.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 20, color: '#333' },
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 10 }
});