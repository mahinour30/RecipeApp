import React from 'react';
import './App.css';

const App = ()=> {

  const App_ID= '8386114c';
  const App_KEY = '12b9dcc058067a9f34feec4632df8292';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${App_KEY}`;


  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
