export interface MovieItemProps{
  movie:Movie;
}
const MovieItemBottom:React.FC<MovieItemProps> = ({movie}) => {
  const base='https://image.tmdb.org/t/p/original/' 
  return (
    <div className='w-[166px] min-w-[250px] min-h-[200px] h-[200px] bg-red-900 mx-1 hover:scale-110 hover:transition-all '>
       <img src={`${base}${movie.poster_path}`} width='100%' height='100%'  />
    </div>
  )
}

export default MovieItemBottom
