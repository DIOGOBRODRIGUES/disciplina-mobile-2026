import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil do Aluno (ScrollView)</Text>
      
      {/* O ScrollView permite rolar o conteúdo, mas renderiza TUDO na memória de uma vez. 
          Use apenas para listas curtas ou conteúdos fixos. */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}><Text style={styles.label}>Nome:</Text><Text>Docente de Exemplo</Text></View>
        <View style={styles.card}><Text style={styles.label}>Matrícula:</Text><Text>202600001</Text></View>
        <View style={styles.card}><Text style={styles.label}>Curso:</Text><Text>Ciência da Computação</Text></View>
        <View style={styles.card}><Text style={styles.label}>Semestre:</Text><Text>2026.1</Text></View>
        <View style={styles.card}><Text style={styles.label}>Status:</Text><Text>Matriculado</Text></View>
        <View style={styles.card}><Text style={styles.label}>Email:</Text><Text>professor@universidade.edu</Text></View>
        {/* Adicione mais Views se quiser mostrar a barra de rolagem em ação */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0', paddingTop: 50 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  scrollView: { paddingHorizontal: 20 },
  card: { backgroundColor: '#fff', padding: 20, marginBottom: 15, borderRadius: 10, elevation: 2 },
  label: { fontWeight: 'bold', color: '#007AFF' }
});
