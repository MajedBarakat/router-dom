import {useState } from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import List from './components/List';
import {movieData} from './components/Data'
import Navzit from './components/Navzit';
import Add from './components/Add'
import Home from './components/page/Home';
import Tra from './components/page/Tra';



function App() {
  const [movies ,setMovies] = useState(movieData)
  const [searchRating, setSearchRating] = useState(0)
  const [searchname, setname] = useState('')
  const handleMovies = (newMovies)=>{
    setMovies([...movies,newMovies])
  }

  return (
    <div>
      <Navzit setSearchRating={setSearchRating} setname={setname} />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies' element={<List movies={movies} searchRating={searchRating} searchname={searchname}/>}/>
      <Route path='/add' element={<Add handleMovies={handleMovies} />}/>
      <Route path='/movies/tra/:id' element={<Tra movies={movies}/>} />
      </Routes>
    </div>
  );
}

export default App;
