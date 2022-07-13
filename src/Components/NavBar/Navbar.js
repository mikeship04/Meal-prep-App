import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import NavBar from './NavBar.css'

function Navbar({handleSearchChange, searchState, handleSubmit}) {
  return (
    <div className="NavBar">
        <SearchBar handleSubmit={handleSubmit} searchState={searchState} handleSearchChange={handleSearchChange} />
    </div>
  )
}

export default Navbar