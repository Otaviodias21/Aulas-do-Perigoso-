import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const res = peso / (altura * altura);
    const texto = `Seu IMC é ${res.toFixed(2)}`;

    setResultado(texto);
    setPeso('');
    setAltura('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo do IMC</Text>
      <Image
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGm2DbaJZIIMGbWw-pbwgTLzauxfcOA8xbD44tu0R_8LUDt8Up2ZeEG6VUtVQYKFLKjI8&usqp=CAU'}}
        style={styles.imagem}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o peso..."
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura..."
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular" onPress={calcular} />
      <Text style={styles.texto}>{resultado}</Text>
    </View>
  );
}
