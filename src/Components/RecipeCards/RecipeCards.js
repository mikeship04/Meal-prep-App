import React from 'react'
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
    const {
        cook_time_minutes, 
        description, 
        name, 
        prep_time_minutes, 
        thumbnail_url, 
        yields} = recipe

      const instructionArray = recipe.instructions

      console.log(instructionArray)

      const recipeInstructions = instructionArray.map((rec) => {
        return <Instructions key={rec.id} rec={rec} />
      })

  return (
  <Grid item xs={4}> 
      <Paper elevation={3} className="Recipecards">
          <img className="recipe-image" alt={name} src={thumbnail_url}/>
            <Box paddingX={1}>
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
            </Box>
            <Box paddingX={1}><Typography variant="subtitle1">prep time: {prep_time_minutes} minutes</Typography></Box>
            <Box paddingX={1}><Typography variant="subtitle1">cook time: {cook_time_minutes} minutes</Typography></Box>
            <Box paddingX={1}><Typography variant="subtitle1">yields: {yields}</Typography></Box>
      </Paper>
  </Grid>
  )
}

export default RecipeCards

          // <ol>instructions
          //     <li>{recipeInstructions}</li>
          // </ol>