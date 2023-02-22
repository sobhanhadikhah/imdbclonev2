import { useEffect, useState } from 'react'
import { Navbar } from './components/'
import { Route, Routes } from 'react-router-dom'
import { Home, Movie, MovieList } from "./pages/";
import DataApi from './context/apiDataContext';
import axios from 'axios';

function App() {
  const [pMovie, setpMovie] = useState([])
  useEffect(() => async () => {
    const respone = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6cf6a858208f01181f58cd16b0789d04&language=en-US&page=1");
    console.log(respone.data.results);
    setpMovie(respone.data.results)
  }, [])
  return (
    <div className='bg-black h-screen overflow-auto ' >
      <Navbar />


      <DataApi.Provider value={{ populermovie: pMovie }} >
        <Routes>
          <Route index element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='movies/:type' element={<MovieList />} />
          {/*  <Route path='movies/:upcoming' element={<MovieList />} /> */}
          <Route path='/*' element={<h1>Error</h1>} />
        </Routes>
      </DataApi.Provider>

    </div>
  )
}

export default App
