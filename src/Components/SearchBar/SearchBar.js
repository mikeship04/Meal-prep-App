import React, { useState, useEffect} from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Item from '@mui/material/TextField'

function SearchBar({handleSearchChange, searchState, handleSubmit, handleShowFavorites}) {

  function handleChange (e) {
    handleSearchChange(e)
  }

  function handleOnSubmit (e) {
    handleSubmit(e)
  }

  return (

    <div className="searchbar">
      <h2>Search</h2>
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
        <Button variant="contained" type="submit">Submit</Button>
        <Button onClick={handleShowFavorites} variant="contained">Show Favorite Recipes!</Button>
      </Box>
    </div>
  )
}

export default SearchBar