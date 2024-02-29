import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';


export default function Categories() {
  
    useEffect(() => {
        fetch("http://localhost:3001/categories")
        .then(response=>response.json())
        .then(data=> {setCategories(data)});
      }, [])
    
    const [categories, setCategories] = useState([]);
      
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Categories
        </ListSubheader>
      }
    >
        {categories.map((category) => {
            return (
                <ListItemButton>
        <ListItemText primary={category.name} />
      </ListItemButton>
            )
        })}
    </List>
  );
}
