import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SkeletonColor from "../Skelton";
import { useLocation } from "react-router-dom";

const SlideShow = () => {
  const [topFive, setTopFive] = useState([]);
  const location = useLocation();
  console.log(location.pathname);
  const arr = ["movies", "series", "tvShows", "actors"];
  const val = location.pathname.split("/").find((el) => arr.includes(el));
  const check = val !== undefined;

  useEffect(() => {
    const fetchTopFiveMovies = async () => {
      const response = await fetch(
        `http://localhost:5000/api/v1/${check ? val : "movies"}/top-5-movies`
      );
      console.log(`http://localhost:5000/api/v1/${check ? val : "movies"}/top-5-movies`)
      const data = await response.json();
      setTopFive(data.data.topFive);
    };
    fetchTopFiveMovies();
  }, [val]);
  console.log("topFive", topFive);
  if (!topFive.length) {
    return <SkeletonColor />;
  }
  return (
    <Carousel style={{ height: "80vh" }}>
      {topFive.map((movie) => (
        <Carousel.Item key={movie._id} style={{ height: "80vh" }}>
          <img
            className="d-block w-100 h-100"
            src={
              `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` ||
              `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.profile_path}`
            }
            alt={movie.title}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>
            {`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` ||
              `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.profile_path}`}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SlideShow;
