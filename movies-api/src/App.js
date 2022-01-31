
import './App.css';
import MovieList from "./components/MovieList"
import { useState, useReact } from "react"



function App() {
  const [movies, setMovies] = useState([
    
    {
    "Title": "Starwars: Goretech",
    "Year": "2018",
    "imdbID": "tt9336300",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg"
},
{
    "Title": "MeUndies x StarWars: The Dark Side",
    "Year": "2018",
    "imdbID": "tt9414858",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzg3ZDcwNDQtOTVlMC00ZjE0LThiYjktY2U2YTVjODU5MWY5XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
},
{
    "Title": "MeUndies x StarWars: The Force",
    "Year": "2018",
    "imdbID": "tt9414918",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTdjYjM1YzgtYmViMS00ODFjLTgyM2EtMjRkNTFiNDEyMTU2XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
},
{
    "Title": "40 Years: StarWars & ILM",
    "Year": "2016",
    "imdbID": "tt5320598",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZTdjYjM1YzgtYmViMS00ODFjLTgyM2EtMjRkNTFiNDEyMTU2XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
}])

  return (
    <div className='app-container'>
      <div className='component-container'>
       <MovieList movies={movies} />

        

      </div>
    </div>
  );
}

export default App;
