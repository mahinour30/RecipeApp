import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
const App = ()=> {

  const App_ID= '8386114c';
  const App_KEY = '12b9dcc058067a9f34feec4632df8292';

  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`;

  useEffect(()=>{
    getRecipes()
  },[query]);

  const getRecipes = async()=>{
    const response = await fetch(URL);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  const updateSearch = e =>{
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-btn' type='submit'>Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}

export default App;
