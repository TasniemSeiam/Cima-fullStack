import axios from "axios";

// const URL = "https://api.themoviedb.org/3";
// const API_KEY = "0548366c45084640330e3330440787b3";
//https://api.themoviedb.org/3/movie/popular?api_key=0548366c45084640330e3330440787b3

export const fetchData = async () => {
  try {
    // const response = await axios.get(`${URL}/${type}?api_key=${API_KEY}`);
    const response = await axios.get("http://localhost:5000/api/v1/movies/");
    // console.log(response.data.result,`url:>  ${URL}/movie/popular?api_key=${API_KEY}` )
    // if (!response.ok) { /// with fetch axios do it by default
    //   throw new Error("could not find the resource") ;
    // }
    console.log(response.data.movies);
    return response.data.movies;
  } catch (error) {
    console.error(error);
  }
};
