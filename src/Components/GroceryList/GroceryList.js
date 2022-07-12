import React from 'react'

function GroceryList({quantity, measurement, input}) {
  
  return (
    
    <div>{quantity} {measurement} of {input}</div>
  )
}

export default GroceryList