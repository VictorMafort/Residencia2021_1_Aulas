import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import estilo from './estilo';

const frases = [
  'Bom dia Pessoas',
  'Olá Humanos!',
  'Está muito frio',
  'Quero ir deitar',
];

class FraseAleatoria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frase: frases[0],
    };
  }
  mudarFrase = () => {
    this.setState({frase: frases[Math.floor(Math.random() * frases.length)]});
  };
  render() {
    return (
      <View style={[estilo.container, estilo.viewPrincipal]}>
        <Text style={estilo.apptext}>Dado do app = {this.props.dataDoApp}</Text>
        <Text style={estilo.countText}>{this.state.frase}</Text>
        <TouchableOpacity onPress={this.mudarFrase} style={estilo.button}>
          <Text style={estilo.title}>Mudar Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const FrasesAleatoriasFuncao = props => {
  const [frase, setFrase] = useState(frases[0]);
  const mudarFrase = () => {
    setFrase(frases[Math.floor(Math.random() * frases.length)]);
  };
  return (
    <View style={[estilo.container, estilo.viewPrincipal]}>
      <Text style={estilo.apptext}>Dado do app = {props.dataDoApp}</Text>
      <Text style={estilo.countText}>{frase}</Text>
      <TouchableOpacity onPress={mudarFrase} style={estilo.button}>
        <Text style={estilo.title}>Mudar Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FraseAleatoria;
