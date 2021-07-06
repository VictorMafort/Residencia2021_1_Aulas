import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './styles';

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
  const handleOnPress = () => {
    Alert.alert('Oi', 'Sou um alert');
  };
  return (
    <View style={styles.view}>
      <Text>oi</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>button</Text>
      </TouchableOpacity>
      <View>
        <Text>olá</Text>
      </View>
      <Aplicativo />
    </View>
  );
};

export default App;
