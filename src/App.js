import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import RecipeCardContainer from './Components/RecipeCardContainer/RecipeCardContainer';
import ShoppingList from './Components/ShoppingList/ShoppingList';

function App() {
  const [recipes, setRecipes] = useState([])
  const [searchState, setSearchState] = useState('')
  const searchParam = searchState
  // make options another file and import
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1a3ef7e2a6msh37681d59318872ep145809jsn7ce65add9101',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  useEffect(() => {
    
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=chicken`, options)
      .then(response => response.json())
      .then(response => setRecipes(response.results))
      .catch(err => console.error(err));
  },[])

  function handleSearchChange(e) {
    setSearchState(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${searchParam}`, options)
      .then(response => response.json())
      .then(response => setRecipes(response.results))
      .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <Navbar handleSubmit={handleSubmit} searchState={searchState} handleSearchChange={handleSearchChange} />
      <RecipeCardContainer recipes={recipes}/>
      <ShoppingList />
    </div>
  );
}

export default App;
