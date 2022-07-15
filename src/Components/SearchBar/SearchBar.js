import React, { useState, useEffect} from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Item from '@mui/material/TextField'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { amber } from '@mui/material/colors'

function SearchBar({handleSearchChange, searchState, handleSubmit}) {

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

  function handleChange (e) {
    handleSearchChange(e)
  }

  function handleOnSubmit (e) {
    handleSubmit(e)
  }

  return (

    <div className="searchbar">
      <Box
      component="form" onSubmit={handleOnSubmit}
      sx={{
        '& > :not(style)': { m: 3, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Item
        value={searchState} 
        onChange={handleChange} 
        id="standard-search" 
        label="Search" 
        variant="standard" 
        InputLabelProps={{
          shrink: true,
        }}/>
        <ThemeProvider theme={theme}>
        <Button variant="contained" type="submit">Submit</Button>
        </ThemeProvider>
      </Box>
    </div>
  )
}

export default SearchBar