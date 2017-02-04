import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import HelloWorldList from './HelloWorldList';

const App = () => {
  return (
    <div className="App">
      {/*Without props*/}
      {/*<HelloWorld></HelloWorld>*/}

      {/*With props*/}
      {/*<HelloWorld name="Dishan"></HelloWorld>*/}

      <HelloWorldList></HelloWorldList>

    </div>
  );
};

export default App;