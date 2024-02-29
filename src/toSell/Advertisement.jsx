import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Advertisement(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <hr></hr>
        <Typography variant="p" color="text.secondary">
           {props.description}   
        </Typography>
        <br></br>
        <Typography variant="p" color="text.secondary">
          {props.price}
        </Typography>  
      </CardContent>
      <CardActions>
        <Button size="small">Apasa-ma</Button>
      </CardActions>
    </Card>
)
}