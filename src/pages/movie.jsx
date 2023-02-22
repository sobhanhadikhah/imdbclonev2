import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
const Movie = () => {
    const { id } = useParams();
    const [Movie, setMovie] = useState([])
    useEffect(() => async () => {
        const respone = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6cf6a858208f01181f58cd16b0789d04&language=en-US&page=1`);
        console.log(respone.status);
        console.log(respone.data);
        setMovie(respone.data);
        window.screenTop(0, 0);
    }, [])
    return (
        <div className='text-white max-w-7xl mx-auto  ' >
            <div className='ml-4  flex justify-between ' >
                <h1 className='text-3xl font-semibold my-2 ' >{Movie.original_title}</h1>
                <div className=' grid grid-cols-1 items-center ' >
                    <div className='flex items-center' >
                        <AiFillStar className='text-yellow-500 mx-2 ' size={30} />
                        <h4 className='text-xl font-medium italic  my-2 ' >{Movie.vote_average}</h4>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-flow-col gap-2   ' >
                <LazyLoadImage width={`300px`} className='rounded-md' effect='blur' src={`https://image.tmdb.org/t/p/original${Movie && Movie.poster_path}`} alt="" />
                <LazyLoadImage className='rounded-sm w-full ' effect='blur' src={`https://image.tmdb.org/t/p/original${Movie && Movie.backdrop_path}`} alt="" />
            </div>
            <div className='max-w-3xl  ' >
                {
                    Movie && Movie.genres
                        ?
                        Movie.genres.map(gen => {
                            return <div className='border-2 px-2 py-1 rounded-2xl mx-2 inline-block ' key={gen.id} >{gen.name}</div>
                        }) : ""

                }
                <p className='py-4' >{Movie && Movie.overview}</p>

            </div>
        </div>
    )
}

export default Movie;