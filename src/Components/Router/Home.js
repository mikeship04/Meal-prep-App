import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Item from '@mui/material/TextField'

function Home() {

  return (
    <div className='homeButton'>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <Button variant="contained">ABOUT US</Button>
        <Button variant="contained">CONTACT</Button>
      </Box>
    </div>

    
  )
}

export default Home