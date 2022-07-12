import React, { useState } from 'react'
import GroceryList from '../GroceryList/GroceryList'
import Shoppinglist from './Shoppinglist.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

function ShoppingList() {
  const [input, setInput] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [measurement, setMeasurement] = useState('')
  const [groceryList, setGroceryList] = useState([])

  function handleChange (e) {
    setInput(e.target.value)
  }
  
  function handleQuantityChange (e) {
    setQuantity(e.target.value)
  }

  function handleMeasurementChange (e) {
    setMeasurement(e.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const shoppingItem = { 
      quantity: quantity, 
      input: input, measurement: 
      measurement}
    const shoppingItemArray = [...groceryList, shoppingItem]
    setGroceryList(shoppingItemArray)
    setInput('')
    setQuantity('')
    setMeasurement('')
  }

  const groceryListItems = groceryList.map(
    (key, value) => {
    return (
      <GroceryList 
      key={value} 
      quantity={key.quantity} 
      measurement={key.measurement} 
      input={key.input}/>
    )
  })

  return (
    <Box 
      component="form" onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      <TextField 
      value={measurement} 
      onChange={handleMeasurementChange} 
      id="outlined-basic" 
      label="ingredient measurement" 
      variant="outlined" />
      <TextField 
      value={input} 
      onChange={handleChange} 
      id="outlined-basic" 
      label="Add Ingredient" 
      variant="outlined" />
      <Button variant="contained" type="submit">Submit</Button>
      {groceryListItems}
    </Box>
    
  )
}

export default ShoppingList