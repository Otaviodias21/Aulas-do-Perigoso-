import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c5c5c5c5',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
    overflow: 'hidden',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    backgroundColor: 'white',
    margin: 15,
    fontSize: 14,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    padding: 20,
  },
  titulo: {
    fontSize: 18,
    color: '#47444D',
    alignSelf: 'center',
    marginTop: 15,
  },
  calcular: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export { styles };
