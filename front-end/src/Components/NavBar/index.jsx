import { NavLink, Outlet } from "react-router-dom";
import classes from "./style.module.css";
import { useState } from "react";
import SlideShow from "../slideShow";
// import Filter from "../Filter";
export default function NavBar() {

  const [searchValue, setSearchValue] = useState("");

  const handelSearch = (e) => {
    setSearchValue(e.target.value);    
  }
  
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <img src="../../../logoMovie.svg" style={{ width: "100px" }} alt="imgs" />
          <ul className={classes.ulNav}>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to=""
                end
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="series"
                end
              >
                Series
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="tvShows"
                end
              >
                TvShow
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="actors"
                end
              >
                Actors
              </NavLink>
            </li>
          </ul>
          <form>
            <input
              type="search"
              className={classes.search}
              placeholder="Search here...."
              style={{
                padding: "7px 10px",
                borderRadius: "5px",
                border: "1px solid #aaa",
              }}
              onChange={handelSearch}
            />
          </form>
        </nav>
      </header>
      <SlideShow/>
      <Outlet context={searchValue} />
    </>
  );
}
