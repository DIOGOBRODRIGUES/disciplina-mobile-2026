import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';

const DADOS_CHAMADA = [
  { title: 'Manhã (Sistemas de Informação)', data: ['Ana Costa', 'Bruno Alves', 'Carlos Medeiros'] },
  { title: 'Noite (Ciência da Computação)', data: ['Daniela Lima', 'Eduardo Souza', 'Fernanda Silva'] },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Chamada (SectionList)</Text>

      <SectionList
        sections={DADOS_CHAMADA}
        keyExtractor={(item, index) => item + index}
        // Renderiza os itens dentro de cada seção
        renderItem={({ item }) => (
          <View style={styles.item}><Text>{item}</Text></View>
        )}
        // Renderiza o cabeçalho de cada seção (o título da turma)
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  sectionHeader: { backgroundColor: '#f4f4f4', padding: 10, fontSize: 16, fontWeight: 'bold', color: '#d32f2f' },
  item: { padding: 15, borderBottomWidth: 1, borderBottomColor: '#eee' }
});
