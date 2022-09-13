import React from 'react'
import MovieCard from './Card'


const List = ({movies ,searchRating ,searchname}) => {
  return (
    <div>
      {
        movies
        .filter((el)=>el.rating >= searchRating &&
        el.name.toLowerCase().includes(searchname.toLowerCase()))
        .map((el)=>(
          <MovieCard   x={el} key={el.id} />
        ))
        }
    </div>
  )
}

export default List