import React from 'react'

function SearchBar() {
  return (
    <div>
      <h2>Search</h2>
      <select>
        <option>Chicken</option>
        <option>Beef</option>
        <option>Pork</option>
        <option>Fish</option>
        <option>Vegetarian</option>
      </select>

      <button>Show Favorite Recipes!</button>
    </div>
  )
}

export default SearchBar