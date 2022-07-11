import React from 'react'

// what we want to display - cook_time_minutes, description, name,
// prep_time_minutes, thumbnail_url, yields 
// instructions - array of objects we want display_text, position recipe.instructions.forEach((instruction)
// what we want to grab id to add key value

function RecipeCards({recipe}) {
    const {
        cook_time_minutes, 
        description, 
        name, 
        prep_time_minutes, 
        thumbnail_url, 
        yields} = recipe

  return (
    <div>
        <h2>{name}</h2>
        <h3>Description:  {description}
        </h3>
        <img alt={'not found'} src={thumbnail_url}/>
        <h4>prep time: {prep_time_minutes} minutes</h4>
        <h4>cook time: {cook_time_minutes} minutes</h4>
        <h4>yields: {yields}</h4>
        <ol>instructions
            <li>instruction text</li>
        </ol>
    </div>
  )
}

export default RecipeCards