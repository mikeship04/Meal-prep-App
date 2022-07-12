import React from 'react'
import Button from '@mui/material/Button'

function SearchBar({handleSearchChange, searchState}) {
  
  function handleChange (e) {
    handleSearchChange(e)
  }

  return (

    <div>
      <h2>Search</h2>
      <input value={searchState} type='text' onChange={handleChange}></input>
      <Button variant="contained" type="submit">Submit</Button>
      <Button variant="contained">Show Favorite Recipes!</Button>
    </div>
  )
}

export default SearchBar