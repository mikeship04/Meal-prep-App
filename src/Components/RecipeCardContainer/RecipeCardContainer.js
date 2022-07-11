import React from 'react'
import RecipeCards from '../RecipeCards/RecipeCards'
import Recipecardcontainer from './Recipecardcontainer.css'

function RecipeCardContainer({recipes}) {

    // what we want to display - cook_time_minutes, description, name,
// prep_time_minutes, thumbnail_url, yields 
// instructions - array of objects we want display_text, position
// what we want to grab id to add key value

    const renderRecipes = recipes.map((r) => {
       return <RecipeCards key={r.id} recipe={r}/>
    })

  return (
    <div className="Recipecardcontainer">
        {renderRecipes}
    </div>
  )
}

export default RecipeCardContainer