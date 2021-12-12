import React from 'react';
import './App.css';
import Test from './component/Test';
import Form from './component/Form'
import Ccomponent from './component/transfer/Ccomponent';
import Api from './component/api/Api'


function App() {
  return (
    <div className="App">
      <Api />
      {/* <Ccomponent />
      /* <Form />
      <Test/> */}
    </div>
  );
}

export default App;
