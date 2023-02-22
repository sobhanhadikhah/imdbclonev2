import React from 'react';
import { Link } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css';
import { AiFillStar } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
const Card = ({ id, title, movie, imgPath, date, vote, overview }) => {
    return (
        <Link to={`movie/${id}`} /* className='rounded-md hover:scale-110 transition-all ease-in-out ' */ >
            <div className='inline-block transition hover:scale-105   m-[0.19rem] overflow-hidden relative   z-0 rounded-[10px] hover:z-[1000]   ' >
                <LazyLoadImage src={`https://image.tmdb.org/t/p/original${movie && imgPath}`} alt={movie && imgPath}
                    effect='blur' className='rounded-md'

                />
                <div className='absolute bottom-0  h-full flex flex-col w-[85%] justify-end bg-gradient-to-r from-black to-[#0001] opacity-0 transition duration-150 hover:opacity-[1]' >
                    <div className='text-2xl mb-2 ml-2 text-white mx-2 ' >{movie && title}</div>
                    <div className='text-yellow-400 ml-2 font-semibold flex my-2   ' >{movie && date} </div>
                    <span className=' text-yellow-400 flex ml-2 text-center items-center font-semibold   ' > <AiFillStar className='text-yellow-400 mx-2 ' size={30} /> {movie && vote} </span>
                    <div className='text-white hidden lg:flex  mb-1 ml-2 text-sm ' >
                        {movie ? movie.overview.slice(0, 118) + "..." : ""}
                    </div>
                </div>

            </div>
        </Link>
    )
}

export default Card;