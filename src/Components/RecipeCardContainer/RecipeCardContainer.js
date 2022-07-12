import React from 'react'
import RecipeCards from '../RecipeCards/RecipeCards'
import Recipecardcontainer from './Recipecardcontainer.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

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
      <Container>
        <Grid container spacing={5}>
          {renderRecipes}
        </Grid>
      </Container>
    </div>
  )
}

export default RecipeCardContainer