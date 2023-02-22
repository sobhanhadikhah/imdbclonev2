import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Card } from '../components';

function MovieList() {
    const { type } = useParams();
    const [MovieList, setMovieList] = useState([]);
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        getData()
    }, [type])
    const getData = async () => {
        const respone = await axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=6cf6a858208f01181f58cd16b0789d04&language=en-US&page=1`);
        setMovieList(respone.data.results);
        console.log(respone.data.results);
    }
    return (
        <div className='max-w-7xl mx-auto ' >
            <h1 className='text-yellow-400 md:mx-6 mx-5 mb-8 font-bold text-3xl' >{type ? type : "Popilur"}</h1>
            <div className='grid md:grid-cols-5 gap-4 grid-cols-2 md:mx-6 mx-5  ' >

                {MovieList && MovieList.map((movie, i) => {
                    return (
                        <Card key={movie.id} id={movie.id} overview={movie.overview}
                            imgPath={movie.poster_path} movie={movie} title={movie.title}
                            vote={movie.vote_average} date={movie.release_date} />
                    )
                })}
            </div>
        </div>
    )
}

export default MovieList