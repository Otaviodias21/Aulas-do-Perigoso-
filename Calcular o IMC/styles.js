import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9D6D7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#FEBBBD',
    borderRadius: 200,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    fontSize: 16,
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 24,
    color: 'orange',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  imagem: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 2,
  },
});

export { styles };
