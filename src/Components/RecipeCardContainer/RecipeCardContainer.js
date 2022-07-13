import React from 'react'
import RecipeCards from '../RecipeCards/RecipeCards'
import Recipecardcontainer from './Recipecardcontainer.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

function RecipeCardContainer({recipes}) {

    const renderRecipes = recipes.map((r) => {
       return <RecipeCards key={r.id} recipe={r}/>
    })

//  if (whatever is the thing we are evaluating) ? renderRecipes : renderFavorites
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