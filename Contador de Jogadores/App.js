import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  function alterarContador(sinal) {
    if (sinal === '+') {
      setContador(contador + 1);
    } else {
      if (contador > 0) {
        setContador(contador - 1);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
       <Image
        style={styles.santosLogo}
        source={{
          uri: 'https://imagensemoldes.com.br/wp-content/uploads/2020/08/Foto-Santos-PNG.png',
        }}
      />
        <Text style={styles.title}>Contador de Jogadores</Text>
        <Text style={styles.count}>{contador}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alterarContador('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.minusButton]} onPress={() => alterarContador('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  santosLogo: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  title: {
    color: '#07E4F2',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  count: {
    fontSize: 48,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#70A331',
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  minusButton: {
    backgroundColor: '#E53E2F',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 36,
  },
});