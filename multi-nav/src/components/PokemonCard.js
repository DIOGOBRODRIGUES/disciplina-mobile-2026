import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PokemonCard({ name, url }) {
  const navigation = useNavigation();
  const parts = url.split('/');
  const pokemonId = parts[parts.length - 2]; 
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    // Quando clicar, navegamos para a tela 'Detail' passando o ID e o Nome
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('Detail', { pokemonId, name })}
    >
      <Image source={{ uri: imageUrl }} style={styles.sprite} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  sprite: { width: 80, height: 80 },
  name: { fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize', color: '#333' }
});