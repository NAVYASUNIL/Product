import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Addproduct = () => {
  return (
    <div style={{ padding: '20px' }}>
    <br /><br /><br /><br /><br />
    <Typography variant="h4">Add a new product</Typography>
    <TextField variant="outlined" color="secondary" label="Product" margin="normal" /><br />
    <TextField variant="outlined" color="secondary" label="Description" margin="normal" /><br />
    <TextField variant="outlined" color="secondary" label="Price" type="number"  margin="normal" /><br />
    <TextField variant="outlined" color="secondary" label="Category"  margin="normal" /><br />
    <Button variant="contained" color="secondary" style={{ marginTop: '16px' }}>Submit</Button>
  </div>
  )
}

export default Addproduct