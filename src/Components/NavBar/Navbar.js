import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import NavBar from './NavBar.css'

function Navbar() {
  return (
    <div className={NavBar}>
        Navbar
        <SearchBar />
    </div>
  )
}

export default Navbar