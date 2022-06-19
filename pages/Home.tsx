import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import MovieItem from '../components/MovieItem'
import MovieItemBottom from '../components/MovieItemBottom'
import logo from '../components/svg/abc.svg'
import {requests} from '../constants/index'
import { Movie } from '../model/model';
export default function Home() {
  const [movie, setMovie] = useState<Movie>();
  const [actionMovie,setActionMovie] = useState<Movie[]>([]);
  const [comedyMovie,setComedyMovie] = useState<Movie[]>([]);
  useEffect(() => {
      async function fetchData() {
          const request = await axios.get(requests.fetchNetflixOriginals);
          const requestAction = await axios.get(requests.fetchActionMovies);
          const requestComedy = await axios.get(requests.fetchComedyMovies);
          setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)
          ]
          );
          setActionMovie(requestAction.data.results);
          setComedyMovie(requestComedy.data.results);
          return request;
      }
      fetchData();
  },[]);
  return (
    <div className='flex-col w-full bg-black overflow-hidden'>
     <div className='flex h-[90px] justify-between w-full px-2 absolute z-40 '>
        <Image src={logo} width='100'  />
        <Image src={'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'} objectFit='contain' width='30' height='30'  />
      </div>
      <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`}} className='w-full   relative h-[500px] bg-cover  '>
      <div className='absolute w-full bottom-10 m-7 flex-col '>
        <p className='text-white text-5xl font-bold whitespace-nowrap'>{ movie?.original_name}</p>
        <div className='flex-row max-w-sm mt-2'>
        <button className='p-2 px-8 bg-[rgba(51,51,51,.5)] text-white hover:bg-white hover:text-black'>
          Play
        </button>
        <button className='p-2 px-8 ml-5 bg-[rgba(51,51,51,.5)] text-white hover:bg-white hover:text-black'>
          My List
        </button>
        </div>
        <p className='text-white  max-w-sm my-3  text-sm leading-normal font-bold'>
        {movie?.overview}
        </p>
      </div>
      <div className='absolute h-10  opacity-39 from-black bg-gradient-to-tr bottom-0 w-full '></div>
      </div>
      <div>
      <p className='text-white ml-4 text-lg mt-2'>Action Movies</p>
        <div  className='flex-row flex overflow-y-hidden overflow-x-scroll m-4 scrollbar-hide'>
       {actionMovie.map(item=>{
         return(
          <MovieItem  movie={item} />
         )
       })}
       
        </div>
      </div>
      <div className='pb-4'>
      <p className='text-white ml-4 text-lg mt-2'>Comedy Movies</p>
        <div  className='flex-row flex overflow-y-hidden overflow-x-scroll m-4 scrollbar-hide'>
        {comedyMovie.map(item=>{
         return(
          <MovieItemBottom  movie={item} />
         )
       })}
        </div>
      </div>
      
    </div>
  
  )
}
