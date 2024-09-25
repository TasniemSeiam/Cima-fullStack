const express = require("express");
const {
  getMovies,
  getMovieById,
  validateId,
  deleteMovie,
  addMovie,
  updateMovie,
  Pagination,
  Sorting,
  getTopFive,
} = require("../controllers/Movies.controllers");
const { validateTopFive } = require("../middlewares/validateTopFive");
const { getSeries } = require("../controllers/Series.controllers");
const { getTvShow } = require("../controllers/TvShows.controllers");
const { getActors } = require("../controllers/Actors.controllers");

const router = express.Router();

// router.param("id", validateId);

router.get("/top-5-movies", validateTopFive, getTopFive);

router.route("/").get(Pagination, Sorting, getMovies).post(addMovie); /// chain for the same path
router.route("/s").get(Pagination, Sorting, getSeries);
router.route("/t").get(Pagination, Sorting, getTvShow);
router.route("/a").get(Pagination, Sorting, getActors);

router.route("/:id").get(getMovieById).patch(updateMovie).delete(deleteMovie);

module.exports = router;
