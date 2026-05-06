import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { id, nome } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes: {nome}</Text>
      <Text>ID do Registro: {id}</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 }
});