import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import './Home.css'
import React, { useState } from 'react'

const Home = () => {
        var[product,setproduct]=useState([])
            axios.get("https://fakestoreapi.com/products")
            .then((response)=>{
                setproduct(response.data)
                console.log(product)
            }
         )
  return (
    <div><br /><br />
    <Grid container spacing={3}>
        {product.map((val) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={val.id}>
                    <Card className="card" sx={{ maxWidth: 345 }}>
                        <CardMedia className="card-media">
                            <img src={val.image} alt={val.title} style={{ height: '100%', width: '50%' }} />
                        </CardMedia>
                        <CardContent className="card-content">
                            <Typography variant="h5" component="h2">
                                {val.category}
                            </Typography>
                            <Typography variant="body1"sx={{ color: 'text.secondary' }}>
                                {val.title}
                            </Typography>
                            <Typography variant="body2">
                                {val.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained' color='secondary'size="small">Share</Button> &nbsp; 
                            <Button variant='contained' color='secondary' size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        })}
    </Grid>
</div>
  )
}

export default Home