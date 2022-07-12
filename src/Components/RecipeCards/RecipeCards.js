import React, {useState} from 'react'
import Instructions from '../Instructions'
import Recipecards from './Recipecards.css'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

// what we want to display - cook_time_minutes, description, name,
// prep_time_minutes, thumbnail_url, yields 
// instructions - array of objects we want display_text, position recipe.instructions.forEach((instruction)
// what we want to grab id to add key value

function RecipeCards({recipe}) {
  const [showRecipe, setShowRecipe] = useState(true)

    const {
        cook_time_minutes, 
        description, 
        name, 
        prep_time_minutes, 
        thumbnail_url, 
        yields,
        id} = recipe

      const instructionArray = recipe.instructions

      const recipeInstructions = instructionArray.map((rec) => {
        return <Instructions key={rec.id} rec={rec} />
      })

      function handleClick(recipe) {
        setShowRecipe(!showRecipe)
      }
      console.log(showRecipe)
      

  return (
<Grid item xs={4}> 
      <Paper id={id} onClick={handleClick} elevation={6} className="Recipecards">
          <img className="recipe-image" alt={name} src={thumbnail_url}/>
            {showRecipe ? <Box paddingX={1}>
              <Typography variant="h5" component="h2">{name}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                  <Typography variant="body2" component="p">
                    Description:  {description}
                  </Typography>
                </Box>
                <Typography variant="subtitle1">prep time: {prep_time_minutes} minutes</Typography>
                <Typography variant="subtitle1">cook time: {cook_time_minutes} minutes</Typography>
                <Typography variant="subtitle1">yields: {yields}</Typography>
            </Box> :  
            <ol>instructions
            <li>{recipeInstructions}</li>
            </ol>}
      </Paper>
  </Grid>
  )
}

export default RecipeCards
   