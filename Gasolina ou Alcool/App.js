import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';
 
export default function App() {
  const [precoAlcool, setPrecoAlcool] = useState(0);
  const [precoGasolina, setPrecoGasolina] = useState(0);
  const [resultado, setResultado] = useState('');
  
  function calcular(){
    let res = precoAlcool / precoGasolina;
    let texto = '';
    if (res > 0.7) {
      texto = 'Gazoza é melhor';
    } else {
      texto = 'Melhor ir de pitú';
    }
    setResultado(texto);
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://logodownload.org/wp-content/uploads/2014/05/posto-ipiranga-logo.png' }}
        style={{position: 'absolute',
          top: 0,
          left: 'center',
          width: 200,
          height: 60,
          borderWidth: 1,
          margin: 10,
         }}
      />

      <Image
        source={{ uri: 'https://img.r7.com/images/2015/02/27/67c0r79wxa_5171w10c28_file?dimensions=771x420&no_crop=true' }}
        style={{ flex: 0.3, borderRadius: 8, borderWidth: 3, width: 250, height: 200, alignSelf: 'center', marginTop: 5 }}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o preço do álcool..."
        onChangeText={preco => setPrecoAlcool(preco)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o preço da gasolina..."
        onChangeText={preco => setPrecoGasolina(preco)}
      />

      <Button
        title="Calcular"
        onPress={calcular}
        color="green"
      />

      <Text style={styles.texto}>{resultado}</Text>
    </View>
  );
}
