import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div> 
      <AppBar sx={{background: 'rgb(238,174,202)',
background: 'radial-gradient(circle, rgba(238,174,202,1) 11%, rgba(38,50,130,1) 51%)'}} >
        
            <Toolbar>
         <Typography variant="h6" color="inherit" component="div">
    Product_App
  </Typography><hr/>
  <Link to='/home'>
  <Button variant='contained' color='secondary'>Home</Button>
  </Link>&nbsp;&nbsp;&nbsp;
  <Link to='/add'>
  <Button variant='contained' color='secondary'> Addproduct</Button>
  </Link>
  </Toolbar>
  </AppBar>
    </div>
  )
}

export default Navbar