import { createStore } from 'redux';

/**
 * Reducer eh uma funcao que eh chamado pelo redux em alguns momentos:
 * No reducer: Funcao que armazena estado e pode manipula-lo
 * Actions: Acoes que passa para o Redux indicando que precisa manipular o state de alguma forma, sendo por acao do usuario, ou acoes da propria aplicacao
 */

const INITIAL_STATE = {quantidade: 0};

//reducer
//Quando tiver mais de um reducer, utilizar o combineReducers
//Parametro state: eh o state anterior antes da alteracao que a action pretende fazer
function reducer(state = INITIAL_STATE, action) {
    console.log('teste');
    if(action.type === 'SOMAR') {
        return {
            ...state, quantidade: action.qtde + 1
        }
    }

    return state;
}

const store = createStore(
    //necessita de um parametro que eh uma funcao que diz o estado inicial da store
    reducer
);

export default store;