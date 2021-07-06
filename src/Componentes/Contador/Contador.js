import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import estilo from './estilo';

// class Contador extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   soma = () => {
//     this.setState({count: this.state.count + 1});
//   };
//   render() {
//     return (
//       <View style={[estilo.container, estilo.viewPrincipal]}>
//         <Text style={estilo.countText}>{this.state.count}</Text>
//         <TouchableOpacity onPress={this.soma} style={estilo.button}>
//           <Text style={estilo.title}>Somar</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

const ContadorFuncao = () => {
  const [count, setCount] = useState(0);
  const soma = () => {
    setCount(previous => {
      return previous;
    });
    setCount(previous => {
      return previous + 1;
    });
  };
  return (
    <View style={[estilo.container, estilo.viewPrincipal]}>
      <Text style={estilo.countText}>{count}</Text>
      <TouchableOpacity onPress={soma} style={estilo.button}>
        <Text style={estilo.title}>Somar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContadorFuncao;
