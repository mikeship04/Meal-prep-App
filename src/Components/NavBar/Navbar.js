import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import NavBar from './NavBar.css'

function Navbar({handleSearchChange, searchState}) {
  return (
    <div className="NavBar">
        <SearchBar searchState={searchState} handleSearchChange={handleSearchChange} />
    </div>
  )
}

export default Navbar