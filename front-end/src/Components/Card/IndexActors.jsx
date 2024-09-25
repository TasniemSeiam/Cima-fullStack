import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import classes from "./style.module.css";
export default function CardActors({ movies}) {
  // console.log(data)
   // const movies = useRouteLoaderData("mango")
    console.log(movies)
  // const image = `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.backdrop_path}`;
 
  return (
    <>
      {movies.map(movie =>  <div className={classes.cardContainer} key={movie.id}>
        <img
         className={classes.img}
         src={
           `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}` ||
           `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.profile_path}`
         }
         alt={movie.title || movie.name}
       />
       <h3 className={classes.title}>Name: {movie.title || movie.name} </h3>
       <p>Rating:{movie.vote_average} </p>
       
     </div> ) }
    
    </>
  );
}
