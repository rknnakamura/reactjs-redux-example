import React from 'react';
import {connect} from 'react-redux';

// import { Container } from './styles';

// export default class Contador extends Component {
  
//   state = {
//     contador: 0
//   };
  
//   _somar = async e => {
//     e.preventDefault();
//     this.setState({ contador: this.state.contador + 1 });    
//   }

//   render() {
//     return (
//         <div>
//             <button onClick={ this._somar }>Contador</button>
//             <h1>{ this.state.contador }</h1>
//         </div>
//     );
//   }
// }

//Action
function somar (qtde) {
  return {
      //Formato padrao que o redux entende
      type: 'SOMAR', //Chave inidica qual acao realizada(unica)
      qtde
  };
}

const Contador = ({ qtde, somarQtde }) => (  
  /**
   * dispatch: serve para realizar disparar actions para o redux
   */
  // <div>
  //     <button onClick={ this._somar }>Contador</button>
  //     <h1>{ this.state.contador }</h1>
  // </div>
  <div>
    <button onClick={() => somarQtde(qtde)}>Somar</button>
    { qtde }
  </div>
);

const mapStateToProps = state => ({ 
  qtde: state.quantidade 
});

const mapDispatchToProps = dispatch => ({ 
  somarQtde: (qtde) => dispatch(somar(qtde)) 
});

//connect utiliza do HOC: patterns do react para compartilhar informacao
//Primeiro parametro do connect recebe uma funcao, funcao que recebe o state e retorna dessa funcao oque eu quero do estado
export default connect(
  //state => ({ qtde: state.quantidade }) // Pode ser trocado pelo mapStateToProps
  mapStateToProps,
  mapDispatchToProps
)(Contador);
