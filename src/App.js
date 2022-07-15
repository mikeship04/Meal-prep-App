import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import RecipeCardContainer from './Components/RecipeCardContainer/RecipeCardContainer';
import ShoppingList from './Components/ShoppingList/ShoppingList';
import Home from './Components/Router/Home'
import {key} from './superSecretStuff'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { amber } from '@mui/material/colors'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  const [recipes, setRecipes] = useState([])
  const [searchState, setSearchState] = useState('')
  const searchParam = searchState
  // make options another file and import
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  const [favorites, setFavorites] = useState([])
  const [display, setDisplay] = useState([true])
  const theme = createTheme({
    palette: {
      primary: {
        main: amber[500],
      },
      secondary: {
        main: '#ff9100',
      },
    },
  });

  useEffect(() => {
   fetch('http://localhost:3000/recipeCards')
   .then(res => res.json())
   .then((data) => setFavorites(data))
 }, [])
  
  useEffect(() => {
    
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=21&q=beef`, options)
    .then(response => response.json())
    .then(response => setRecipes(response.results))
    .catch(err => console.error(err));
  },[])
  
  function handleSubmit(e) {
    e.preventDefault()
    
    fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${searchParam}`, options)
    .then(response => response.json())
    .then(response => setRecipes(response.results))
    .catch(err => console.error(err));
  }
  
  function handleSearchChange(e) {
    setSearchState(e.target.value)
  }

  function handleShowFavorites () {
    setDisplay(!display)
  }  

  function handleAddFavorite(newItem) {
    setFavorites([...favorites, newItem]);
  }

  return (
    <div className="App">
      <Navbar 
        handleSubmit={handleSubmit} 
        searchState={searchState} 
        handleSearchChange={handleSearchChange} />
      <RecipeCardContainer
      handleAddFavorite={handleAddFavorite}
      theme={theme}
      handleShowFavorites={handleShowFavorites}
      display={display}  
      recipes={display ? recipes : favorites}/>
      <ShoppingList theme={theme} />
    </div>
  );
}

export default App;
