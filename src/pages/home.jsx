import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import DataApi from '../context/apiDataContext';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Carousel } from 'react-responsive-carousel';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Card } from '../components';
const Home = () => {
    const DataPmovie = useContext(DataApi);

    return (
        <div className='max-w-7xl mx-auto ' >
            <div className=' py-4  ' >
                <Carousel

                    axis='horizontal'
                    showThumbs={false}
                    transitionTime={4}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    swipeable={true}
                >
                    {DataPmovie.populermovie.map((movie, i) => {
                        return (
                            <Link to={`/movie/${movie.id}`} key={movie.id} className='' >
                                <div className='m-auto block w-[100%]  hover:opacity-50 transition  ease-in bg-gradient-to-r from-[#000] to-[#0001] bg-blend-overlay opacity-70 ' >
                                    <LazyLoadImage effect='blur'
                                        className='m-auto block w-[100%]  md:rounded-2xl'
                                        src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={movie && movie.original_title} />

                                </div>
                                <div className='text-white md:bg-black   md:bg-blend-overlay md:bg-opacity-30 flex flex-col  absolute bottom-0 items-start p-10 md:p-20  md:text-3xl font-bold leading-10  ' >
                                    {movie.original_title}
                                    <h3 className='md:flex hidden ' >
                                        <span className='flex flex-row text-center text-base items-center justify-center  ' > <AiFillStar size={30} className='text-yellow-400 mx-2 md:flex hidden  ' /> {movie.vote_average}</span>

                                    </h3>
                                    <div className='text-base md:flex hidden  font-normal ' >
                                        <p>
                                            {movie.overview}
                                        </p>
                                    </div>

                                </div>

                            </Link>
                        )
                    })}
                </Carousel>
            </div>
            <h1 className='mt-8 text-white mx-3 font-bold text-3xl my-8' >Popular movies</h1>
            <div className='grid md:grid-cols-5 md:mx-6 mx-5  gap-4 grid-cols-2 ' >

                {DataPmovie.populermovie.map((movie, i) => {
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
export default Home;