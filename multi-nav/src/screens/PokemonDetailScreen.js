import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PokemonDetailScreen({ route }) {
  // Desestruturamos os parâmetros que enviamos do Card
  const { pokemonId, name } = route.params;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>ID na Pokédex: #{pokemonId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#FFF', padding: 20 },
  image: { width: 250, height: 250, marginVertical: 20 },
  title: { fontSize: 32, fontWeight: 'bold', textTransform: 'capitalize', color: '#333' },
  subtitle: { fontSize: 18, color: '#666', marginTop: 10 }
});