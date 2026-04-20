
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', disciplina: 'Mobile Coding', nota: '9.5' },
  { id: '2', disciplina: 'Back-End Frameworks', nota: '8.0' },
  { id: '3', disciplina: 'Data Science', nota: '10.0' },
  { id: '4', disciplina: 'Machine Learning', nota: '9.0' },
  { id: '5', disciplina: 'Cloud Computing', nota: '8.5' },
  { id: '6', disciplina: 'Cybersecurity', nota: '9.2' },
  { id: '7', disciplina: 'Artificial Intelligence', nota: '9.8' },
  { id: '8', disciplina: 'Web Development', nota: '8.7' },
  { id: '9', disciplina: 'Database Systems', nota: '9.3' },
  { id: '10', disciplina: 'Software Engineering', nota: '8.9' },
  { id: '11', disciplina: 'Human-Computer Interaction', nota: '9.1' },
  { id: '12', disciplina: 'Computer Networks', nota: '8.4' },
  { id: '13', disciplina: 'Operating Systems', nota: '9.0' },
  { id: '14', disciplina: 'Programming Languages', nota: '9.6' },
  { id: '15', disciplina: 'Computer Graphics', nota: '8.8' }

];
export default function App() {
  // Função que define como cada item da lista será renderizado
  const renderDisciplina = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.disciplina}</Text>
      <Text style={styles.nota}>Nota: {item.nota}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notas do Semestre (FlatList)</Text>
      
      {/* FlatList é a melhor prática para performance em listas longas */}
      <FlatList
        data={DATA} // A fonte de dados
        renderItem={renderDisciplina} // Como desenhar cada linha
        keyExtractor={item => item.id} // Identificador único (importante para o React)
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#333' },
  item: { backgroundColor: '#e3f2fd', padding: 20, marginVertical: 8, borderRadius: 8, borderLeftWidth: 5, borderLeftColor: '#2196F3' },
  title: { fontSize: 16, fontWeight: 'bold' },
  nota: { fontSize: 14, color: '#666' }
});