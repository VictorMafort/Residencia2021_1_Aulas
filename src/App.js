import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';
import ContadorFuncao from './Componentes/Contador/Contador';
import FrasesAleatoriasFuncao from './Componentes/FrasesAleatoria/FrasesAleatorias';

class Aplicativo extends React.Component {
  render() {
    return (
      <View>
        <Text>Sou o componente Aplicativo</Text>
      </View>
    );
  }
}

const App = () => {
  const data = 'Eu sou o App mesmo';
  return (
    <View style={styles.view}>
      <Aplicativo />
      <ContadorFuncao />
      <FrasesAleatoriasFuncao dataDoApp={data} />
    </View>
  );
};

export default App;
