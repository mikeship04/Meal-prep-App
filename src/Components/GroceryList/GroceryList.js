import React from 'react'
import ShoppingList from '../ShoppingList/ShoppingList';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import grocerylist from './grocerylist.css'

function GroceryList({quantity, measurement, input, id, handleDelete}) {

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function reallyDelete() {
  handleDelete(id)
}

return (

  <Grid item xs={12} md={6}>
      <Typography  sx={{ mt: -2, mb: 2, color: 'green' }} variant="h6" component="div">
        </Typography>
        <Demo>
          <List >
            {generate(
              <ListItem  className="grocery-list" >
                <ListItemText 
                />{quantity} {measurement} of {input}
                <ListItemIcon edge="end" aria-label="delete">
              <DeleteIcon className="delete-button" onClick={reallyDelete}/>
            </ListItemIcon>
              </ListItem>,


            )}
          </List>
        </Demo>
      </Grid>
)
}

export default GroceryList
