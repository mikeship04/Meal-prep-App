import React, {useState} from 'react'
import Instructions from '../Instructions'
import Recipecards from './Recipecards.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

// what we want to display - cook_time_minutes, description, name,
// prep_time_minutes, thumbnail_url, yields 
// instructions - array of objects we want display_text, position recipe.instructions.forEach((instruction)
// what we want to grab id to add key value

function RecipeCards({recipe, setFavorites, favorites}) {
  const [showRecipe, setShowRecipe] = useState(true)
  const [like, setLike] = useState(false)
  const instructionArray = recipe.instructions ?? [{display_text: 'recipe not found'}]
  
    const {
        cook_time_minutes, 
        description, 
        name, 
        prep_time_minutes, 
        thumbnail_url, 
        yields,
        id,
        instructions} = recipe

      const recipeInstructions = instructionArray.map((rec) => {
        return <Instructions key={rec.id} rec={rec} />
      })

      function handleClick(recipe) {
        setShowRecipe(!showRecipe)
      }

      function handleLike(e) {
        e.stopPropagation()
        setLike(!like)
          const recipeItem = { 
            cook_time_minutes, 
            description, 
            name, 
            prep_time_minutes, 
            thumbnail_url, 
            yields,
            id: id+10000,
            like: true,
            instructions,
          }
          const recipeItemArray = recipeItem
      
          const configurationObject = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify(recipeItemArray),
            } 
            return fetch("http://localhost:3000/recipeCards", configurationObject)
        }

  return (
<Grid item xs={4}> 
      <Paper id={id} onClick={handleClick} elevation={20} className="Recipecards">
          <img className="recipe-image" alt={name} src={thumbnail_url}/>
            {showRecipe ? <Box paddingX={1}>
              <Typography variant="h4" component="h2">{name}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                  <Typography variant="body1" component="p">
                    Description:  {description}
                  </Typography>
                </Box>
                <Typography variant="subtitle1">Prep time: {prep_time_minutes} minutes</Typography>
                <Typography variant="subtitle1">Cook time: {cook_time_minutes} minutes</Typography>
                <Typography variant="subtitle1">Tields: {yields}</Typography>
                {like ? <FavoriteIcon onClick={handleLike} /> : <FavoriteBorderIcon onClick={handleLike} />}
            </Box> : 
            <Box paddingX={1}>
              <Typography variant="subtitle1">
                <ol className="inside">Instructions
                {recipeInstructions}
                </ol>
              </Typography>
            </Box>}
      </Paper>
  </Grid>
  )
}

export default RecipeCards
   