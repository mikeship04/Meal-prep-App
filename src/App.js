import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import RecipeCardContainer from './Components/RecipeCardContainer';
import ShoppingList from './Components/ShoppingList';

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '779106e3f6mshd8ff79161f60763p1564cbjsn3c570f10dc5a',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };
    
    fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
      .then(response => response.json())
      .then(response => setRecipes(response.results))
      .catch(err => console.error(err));
  },[])


  return (
    <div className="App">
      <p>Hello world!</p>
      <Navbar />
      <RecipeCardContainer recipes={recipes}/>
      <ShoppingList />
    </div>
  );
}

export default App;
