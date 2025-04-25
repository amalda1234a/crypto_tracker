
import React from 'react';
import { Provider } from 'react-redux';
import store from './Pages/Store';  
import Table from './Components/Table';  

function App() {
  return (
    <Provider store={store}>
      <div>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
