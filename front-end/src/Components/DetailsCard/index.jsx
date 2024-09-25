import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import classes from "./style.module.css";
import {
  NavLink,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";

import axios from "axios";

const DetailsCard = () => {
  const movie = useLoaderData();
  console.log(movie)
  //   const [movie, setMovie] = useState({});
  //   const params = useParams();
  //   useEffect(() => {
  //     const getMovieLoader = async () => {
  //         const movieId = params.id;
  //         console.log(movieId);
  //         const response = await fetch(
  //         "http://localhost:5000/api/v1/movies/" + movieId
  //       );
  //           const res =await response.json();
  //         console.log(res)

  //         setMovie(res.data);
  //     };
  //     getMovieLoader();
  //   }, []);

  return (
    <>
      {Object.keys(movie).length ? (
        <Col style={{marginLeft:"350px",padding:"20px"}} >
          <Card style={{width:"70%"}} >
            <Card.Img
              variant="top"
              className={classes.img}
              src={
                `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` ||
                `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.profile_path}`
              }
              alt={movie.title || movie.name}
            />
            <Card.Body className="cardBody">
              <Card.Title>Name: {movie.title || movie.name} </Card.Title>
              <Card.Text>Rating:{movie.vote_average}</Card.Text>
              <NavLink to={movie.homepage || "/notFound" } variant="info">
                Watch Now
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      ) : (
        <h1>not found </h1>
      )}
    </>
  );
};

export default DetailsCard;
export const getMovieLoader = async ({ params }) => {
  const movieId = params.id;
  console.log(movieId);
  const response = await fetch(
    `http://localhost:5000/api/v1/movies/${movieId}`
  );
  const res = await response.json();
  console.log(res.data);

  return res.data;
};
