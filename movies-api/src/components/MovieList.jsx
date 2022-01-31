import React from 'react';


function MovieList(props) {

  
  return (
    <>
      {
        props.movies.map((movie, index) =>
          <div key={index} className='image-container d-flex justify-content-start m-3'>
          <img key={index} src={movie.Poster} alt="movie" ></img>
        </div>)
    }
    </>
  )
}

export default MovieList;
