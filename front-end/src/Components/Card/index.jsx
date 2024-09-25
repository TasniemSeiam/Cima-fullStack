import { NavLink, useLoaderData } from "react-router-dom";
import classes from "./style.module.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tooltip from '@mui/material/Tooltip';

export default function CardApp({ movies }) {
  // console.log(data)
  // const movies= useLoaderData()
  // const image = `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.backdrop_path}`;





  console.log("data=> ", movies);
  return (
    <Row
      xs={1}
      md={4}
      className="g-4"
      style={{ marginRight: "0px", padding: "20px" }}
    >
      {movies.map((movie) => (
        <Grid size={{ xs: 6, md: 4, lg: 3 }} key={movie._id}>
          <Card>
            <Card.Img
              variant="top"
              className={classes.img}
              src={
                `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` ||
                `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.profile_path}`
              }
              alt={movie.title || movie.name}
            />
            <Card.Body className="cardBody" style={{ height: "185px" }}>
              <Tooltip title={movie.title || movie.name}>
                <Card.Title
                  style={{
                    fontSize: "17px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Name: {movie.title || movie.name}{" "}
                </Card.Title>
              </Tooltip>
              <Card.Text>Rating:{movie.vote_average}</Card.Text>
              <NavLink to={`movies/${movie._id}`} variant="info">
                More Details
              </NavLink>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Row>
  );
}
