import React from 'react';
import './App.css';

//Utiliza context api, forma de passar a todos os componentes filhos uma informacao
import { Provider } from 'react-redux';

import Contador from './Contador'
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store} >
        <Contador />
      </Provider>
    </div>
  );
}

export default App;
