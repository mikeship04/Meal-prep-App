import React, { useState, useEffect } from 'react'
import GroceryList from '../GroceryList/GroceryList'
import Shoppinglist from './Shoppinglist.css'
import Box from '@mui/material/Box';
import Item from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import { render } from '@testing-library/react';

function ShoppingList() {
  const [input, setInput] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [measurement, setMeasurement] = useState('')
  const [groceryList, setGroceryList] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3000/groceries')
    .then(res => res.json())
    .then((data) => setGroceryList(data))
  }, [])

  function handleChange (e) {
    setInput(e.target.value)
  }
  
  function handleQuantityChange (e) {
    setQuantity(e.target.value)
  }

  function handleMeasurementChange (e) {
    setMeasurement(e.target.value)
  }

  //conditionally add if statement, if event.target.id exists = run code else null
  function handleSubmit(event) {
    event.preventDefault()
    const shoppingItem = { 
      quantity: quantity, 
      input: input, 
      measurement: measurement
    }
    const shoppingItemArray = [...groceryList, shoppingItem]
    setGroceryList(shoppingItemArray)
    setInput('')
    setQuantity('')
    setMeasurement('')

    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(shoppingItem),
      } 
      return fetch("http://localhost:3000/groceries", configurationObject)
  }

  //need to do something with grocerylist stae to delete?
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
  console.log(groceryListItems)

  return (
    <Box className='shopping-list'
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