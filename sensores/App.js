import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Accelerometer } from 'expo-sensors';

// Pegamos as dimensões da tela para manter a "bolha" dentro dos limites
const { width, height } = Dimensions.get('window');

export default function App() {
  // Estado para armazenar os dados dos eixos X, Y e Z
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
  
  // Estado para gerenciar a inscrição (subscription) no sensor
  const [subscription, setSubscription] = useState(null);

  // Função para ativar a leitura do sensor
  const subscribe = () => {
    // Define a frequência de atualização dos dados (em milissegundos)
    // 50ms cria um movimento fluido para a interface
    Accelerometer.setUpdateInterval(50);

    // Começa a escutar os dados e atualiza o estado
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  // Função para parar a leitura do sensor (vital para evitar vazamento de memória)
  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  // useEffect para iniciar o sensor quando o componente montar e limpar ao desmontar
  useEffect(() => {
    subscribe();
    
    // O retorno do useEffect é a função de limpeza (cleanup)
    return () => unsubscribe();
  }, []);

  // Calculando a posição da bolha visual baseada nos eixos X e Y
  // Multiplicamos por um fator (ex: 150) para exagerar o movimento na tela
  const ballX = x * 150; 
  const ballY = -y * 150; // Invertido para que inclinar o celular para baixo desça a bola

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sensor: Acelerômetro</Text>
      
      {/* Exibição dos dados brutos para fins didáticos */}
      <View style={styles.dataContainer}>
        <Text style={styles.text}>Eixo X (Lateral): {x.toFixed(3)}</Text>
        <Text style={styles.text}>Eixo Y (Vertical): {y.toFixed(3)}</Text>
        <Text style={styles.text}>Eixo Z (Profundidade): {z.toFixed(3)}</Text>
      </View>

      {/* Representação visual do sensor */}
      <View style={styles.sensorArea}>
        <View 
          style={[
            styles.ball, 
            { transform: [{ translateX: ballX }, { translateY: ballY }] }
          ]} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E24',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  dataContainer: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 40,
  },
  text: {
    fontSize: 18,
    color: '#00D8FF',
    fontFamily: 'monospace',
    marginBottom: 5,
  },
  sensorArea: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#2A2A35',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#444',
    overflow: 'hidden',
  },
  ball: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00D8FF',
    position: 'absolute',
  },
});