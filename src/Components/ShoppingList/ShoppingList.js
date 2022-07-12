import React from 'react'
import GroceryList from '../GroceryList/GroceryList'
import Shoppinglist from './Shoppinglist.css'

function ShoppingList() {
  return (
    <div className="Shoppinglist">
        <h2>ShoppingList</h2>
          <form className="Shoppinglist-form">
            <label for="Ingredient">Add Ingredient</label>
            <input type="text" name="Ingredient"></input>
            <label for="Quantity">Add Quantity</label>
            <input type="text" name="Quantity"></input>
            <label for="Submit"></label>
            <input type="Submit"></input>
          </form>
        <GroceryList />
    </div>
  )
}

export default ShoppingList