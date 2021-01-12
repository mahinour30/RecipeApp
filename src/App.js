import React, {useEffect, useState} from 'react';
import './App.css';

const App = ()=> {

  const App_ID= '8386114c';
  const App_KEY = '12b9dcc058067a9f34feec4632df8292';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${App_KEY}`;
  const [counter, setCounter] = useState(0);

  useEffect(()=>{
    console.log('Effect has been run')
  },);

  return (
    <div className="App">
      <form className='search-form'>
        <input type='text' className='search-bar'></input>
        <button
        onClick={()=>setCounter(counter+1)} type='submit' className='search-btn'
        >
          {counter}</button>
      </form>
    </div>
  );
}

export default App;
