import { createBrowserRouter } from "react-router-dom";
import MoviePage from "../pages/Movie";
import SeriesPage from "../pages/Series";
import TvShowPage from "../pages/TvShow";
import ActorsPage from "../pages/Actors";
import NavBar from "../Components/NavBar";
import ErrorPage from "../pages/error";
import { loader as moviesLoader } from "../pages/Movie";
import Details from "../pages/Details";
import { getMovieLoader } from "../Components/DetailsCard";
// import "../index.css"
//(a,b,c,d) > a= inlineStyle ,b=#id, c=.classes attrebutes psudo , d=elements
// 0,0,0,0
// 0 0 1 2
// 0 0 1 0

const router = createBrowserRouter([
  {
    path: "/api/v1/", //parent path
    element: <NavBar />,
    loader: moviesLoader,
    id: "mango",
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <MoviePage /> },
      { path: "movies/:id", element:<Details/>,loader:getMovieLoader},
      { path: "series", element: <SeriesPage /> },
      { path: "tvShows", element: <TvShowPage /> },
      { path: "actors", element: <ActorsPage /> },
      {
        /*{ path: "*", element: <h1 style={{textAlign:"center"}} >404 Not Found</h1> },*/
        // error in children
      },
    ],
  },
]);

export default router;
