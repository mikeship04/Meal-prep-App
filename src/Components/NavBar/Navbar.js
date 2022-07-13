import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import NavBar from './NavBar.css'

function Navbar({handleSearchChange, searchState, handleSubmit, handleShowFavorites}) {
  return (
    <div className="NavBar">
        <SearchBar 
        handleSubmit={handleSubmit} 
        searchState={searchState} 
        handleSearchChange={handleSearchChange}
        handleShowFavorites={handleShowFavorites} />
    </div>
  )
}

export default Navbar