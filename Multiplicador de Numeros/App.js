import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './styles';

export default function App() {
const [numero1, setNumero1] = useState(0);
const [numero2, setNumero2] = useState(0);
const [resultado, setResultado] = useState('');

function calcular() {
res = numero1 * numero2;
setResultado('Resultado: ' + res);
}

return (
<View style={styles.container}>
<Text style={styles.titulo}>Multiplicador de Números</Text>
  <TextInput
    style={styles.input}
    placeholder="Digite o primeiro número..."
    onChangeText={setNumero1}
  />

  <TextInput
    style={styles.input}
    placeholder="Digite o segundo número..."
    onChangeText={setNumero2}
  />

  <Button title="Calcular" onPress={calcular} color="#f194ff" />
 
  <Text style={styles.texto}>{resultado}</Text>
</View>
);
}