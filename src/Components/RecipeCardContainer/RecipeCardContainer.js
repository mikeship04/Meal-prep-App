import React from 'react'
import RecipeCards from '../RecipeCards/RecipeCards'
import Recipecardcontainer from './Recipecardcontainer.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import {ThemeProvider } from '@mui/material/styles'

function RecipeCardContainer({recipes, like, setLike, handleShowFavorites, display, theme}) {

    const renderRecipes = recipes.map((r) => {
       return <RecipeCards 
       like={like}
       setLike={setLike} 
       key={r.id} 
       recipe={r}/>
    })

  return (
    <div className="Recipecardcontainer">
      <h2 className="header">Click card to show recipe!</h2>
      <Container>
      <ThemeProvider theme={theme}>
        <Button onClick={handleShowFavorites} variant="contained">{display ? 'Show Favorite Recipes!' : 'Show More Recipes!'}</Button>
      </ThemeProvider>
        <Grid container spacing={5}>
          {renderRecipes}
        </Grid>
      </Container>
    </div>
  )
}

export default RecipeCardContainer