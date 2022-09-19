import React from 'react';
import {Card} from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import {Link} from 'react-router-dom';

function MovieCard({x}) {
  return (
    <Link to={`/movies/tra/${x.id}`}>
    
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <img src={x.url} style={{height: '200px'}} alt='gg'/>
        <Card.Title> {x.name} </Card.Title>
        <Card.Text>{x.date}</Card.Text>
        <Card.Text>{x.discription}</Card.Text>
        <Rating name="read-only" value={x.rating} readOnly />
      </Card.Body>
    </Card>
  
  
  </Link>
  )
}

export default MovieCard