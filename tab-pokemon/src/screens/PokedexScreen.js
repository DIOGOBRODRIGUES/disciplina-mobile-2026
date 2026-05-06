import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, SafeAreaView, Text } from 'react-native';
import { fetchPokemons } from '../services/api';
import PokemonCard from '../components/PokemonCard';

export default function PokedexScreen() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemons(30);
      setPokemon(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#EF5350" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokédex Kanto</Text>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
        renderItem={({ item, index }) => (
          <PokemonCard name={item.name} index={index} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 15, color: '#333' }
});