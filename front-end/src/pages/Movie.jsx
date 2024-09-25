import { useEffect, useState, useRef } from "react";
import { fetchData } from "../controllers/Data.Controller";
import {
  replace,
  useLoaderData,
  useNavigate,
  useOutletContext,
  useRouteLoaderData,
} from "react-router-dom";
import CardApp from "../Components/Card";
import { Footer } from "../Components/Footer";
import Filter from "../Components/Filter";
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';



export default function MoviePage() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [queryStr, setQueryStr] = useState("");
  const handelSubmitSorting = (e) => {
    e.preventDefault();
    const form = new FormData(formRef.current);
    console.log("===> ", form);
    const arr = [];
    for (const i of form.entries()) {
      arr.push(i.join("="));
    }
    const newQuery = arr.join("&");
    setQueryStr(`&${newQuery}`);
    // const fetchSorting = async () => {
    //   try {
    //     const fetchFilter = await fetch(
    //       `http://localhost:5000/api/v1/movies?${newQuery}`
    //     );
    //     const movies = fetchFilter.json();
    //     setMovies(movies);

    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // fetchSorting();
    navigate(`?numberPage=${numberPage}&limit=5${queryStr}`);
  };

  // const searchValue = useOutletContext();
  const [numberPage, setNumberPage] = useState("1");
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  // }, [queryStr, numberPage, navigate]);

  useEffect(() => {
    async function fetchMoviesQuery() {
      const response = await fetch(
        `http://localhost:5000/api/v1/movies?numberPage=${numberPage}&limit=5${queryStr}`
      );
      const data = await response.json();
      console.log("data====>  ", data);
      setMovies(data.data.movies);
    }
    fetchMoviesQuery();
    navigate(`?numberPage=${numberPage}&limit=5${queryStr}`);
  }, [numberPage, queryStr]);
  //   const [movie, setMovie] = useState([]);
  //   useEffect(() => {
  //     const fetchMovie = async () => {
  //       const data = await fetchData("movie/popular");
  //       setMovie(data);
  //     };
  //     fetchMovie();
  //   }, []);

  //   console.log(movie);
  // let data = useRouteLoaderData("mango");
  // console.log(data);
  // console.log(searchValue);
  // let filteredData = data.filter(
  //   (movie) => movie.title.toLowerCase() === searchValue.toLowerCase().trim() /// length first 0
  //   // movie.title.toLowerCase().includes(searchValue.toLowerCase().trim()) /// length 20 ==  length of data
  // );
  // console.log("length=>>>>>  ", filteredData.length);
  // console.log(filteredData);

  // useEffect(() => {
  //   if (!filteredData.length) {
  //     // filteredData = " ";
  //     console.log("hello from if");
  //   } else {
  //     // data = filteredData;
  //     console.log("hello from else");
  //   }
  // }, [searchValue]);
  // if (filteredData.length>0) {
  //   data = filteredData;
  // } else {
  //   data=""
  // }
  // console.log(filteredData);

  return (
    <main>
      <Filter
        ref={formRef}
        handelSubmitSorting={handelSubmitSorting}
        numberFilters={3}
        values={["title", "vote_average", "overview"]}
      />
      <Grid container spacing={2} sx={{textAlign:"center"}} >
        <CardApp movies={movies} />
      </Grid>
      <Footer numberPage={numberPage} setNumberPage={setNumberPage} />
    </main>
  );
}

export async function loader() {
  const response = await fetch(
    "http://localhost:5000/api/v1/movies?numberPage=1&limit=5"
  );
  const data = await response.json();
  console.log(data);
  return data.data.movies;
}
