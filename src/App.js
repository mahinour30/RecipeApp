import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
const App = ()=> {

  const App_ID= '8386114c';
  const App_KEY = '12b9dcc058067a9f34feec4632df8292';

  const URL = `https://api.edamam.com/search?q=chicken&app_id=${App_ID}&app_key=${App_KEY}`;
  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    getRecipes()
  },[]);

  const getRecipes = async()=>{
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch

  return (
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={}/>
        <button className='search-btn' type='submit'>Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
