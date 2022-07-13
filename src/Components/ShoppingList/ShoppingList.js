import React, { useState } from 'react'
import GroceryList from '../GroceryList/GroceryList'
import Shoppinglist from './Shoppinglist.css'
import Box from '@mui/material/Box';
import Item from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';

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
        '& > :not(style)': { m: 3, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack spacing={1}>
        <Item
            id="outlined-number"
            label="Quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        <Item
        value={measurement} 
        onChange={handleMeasurementChange} 
        id="standard-search" 
        label="Ingredient measurement" 
        variant="standard" 
        InputLabelProps={{
          shrink: true,
        }}/>
        <Item 
        value={input} 
        onChange={handleChange} 
        id="standard-search" 
        label="Add Ingredient" 
        variant="standard" 
        InputLabelProps={{
          shrink: true,
        }}/>

        <Button variant="contained" type="submit">Submit</Button>
      {groceryListItems}
      </Stack>
    </Box>
    
  )
}

export default ShoppingList