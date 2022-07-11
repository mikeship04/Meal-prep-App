import React from 'react'

function ShoppingListForm() {
  return (
    <div>ShoppingListForm
      <form>
        <label for="Ingredient">Add Ingredient</label>
        <input type="text" name="Ingredient"></input>
        <label for="Quantity">Add Quantity</label>
        <input type="text" name="Quantity"></input>
      </form>
    </div>
  )
}

export default ShoppingListForm