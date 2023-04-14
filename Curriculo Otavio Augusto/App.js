import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EBC4',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  profileImage: {
          borderWidth: 4,
          borderRadius: 40, width: 200, height: 200,   
          marginTop: 20,
          marginRight: 'auto',
          marginBottom: 0,
          marginLeft: 'auto'
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionText: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: '#333333',
    marginBottom: 10,
    textAlign: 'center',
  },
});

const App = () => {
  const [dados] = useState('Dados Pessoais');
  const [name] = useState('Otávio Augusto dias Araujo');
  const [idade] = useState('20 Anos');
  const [num] = useState('(13)9711-****');
  const [nasc] = useState('22/02/2002');
  const [civil] = useState('Solteiro');
  const [email] = useState('Técnico em Informática para Internet - ETEC Praia Grande');
  const [phone] = useState('Cursando Análise e Desenvolvimento de Sistemas - FATEC Praia Grande');
  const [skills] = useState(['Estagiario na Prefeituira de São Vicente direcionado para Área de Manutenção de Computadores e Redes', 'Inicio Jul/2022 até Atualmente']);
  const [educacao] = useState([
    { fatec: 'Calculadora mobile e Site da Etec', github: 'https://github.com/Otaviodias21'},
  
  ]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://avatars.githubusercontent.com/u/60992292?v=4' }} style={styles.profileImage} />

      <Text style={styles.sectionTitle}>{dados}</Text>
      <Text style={styles.sectionText}>Nome: {name}</Text>
      <Text style={styles.sectionText}>Idade: {idade}</Text>
      <Text style={styles.sectionText}>Contato: {num}</Text>
      <Text style={styles.sectionText}>Nascimento: {nasc}</Text>
      <Text style={styles.sectionText}>Estado Cívil: {civil}</Text>
      <Text style={styles.sectionTitle}>Formação</Text>
      <Text style={styles.sectionText}>{email}</Text>
      <Text style={styles.sectionText}>{phone}</Text>

      <Text style={styles.sectionTitle}>Experiência</Text>
      {skills.map((skill) => (
        <Text key={skill} style={styles.sectionText}>
          {skill}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Projetos</Text>
      {educacao.map((edu) => (
        <View key={edu.fatec} style={{ marginBottom: 10 }}>
          <Text style={styles.sectionText}>{edu.fatec}</Text>
          <Text style={styles.sectionText}>{edu.github}</Text>
        </View>
      ))}
    </View>
  );
};

export default App;
