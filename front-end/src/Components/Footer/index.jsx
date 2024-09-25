import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Pagination from '@mui/material/Pagination';



export const Footer = ({numberPage,setNumberPage}) => {
  // const [numberPage, setNumberPage] = useState("1");
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();
  const handelNumberPage = (e) => {
    setNumberPage(e.target.textContent);
    setIsActive(true)
    navigate(`?numberPage=${e.target.textContent}&limit=5`);
   
  };

  const pStyle={
    width: "30px",
    height: "30px",
    textAlign: "center",
    border: "3px solid #aaa",
    cursor: "pointer",
    borderRadius: "50%",
    textDecoration:"none"
  }
  
    console.log("NumberPage",numberPage)
 
  
  // if (2 > 1) {
  //   return (
  //     <Pagination
  //       count={4}
  //       variant="text"
  //       color="primary"
  //       page={parseInt(numberPage)}
  //       onChange={handelNumberPage}
  //       style={{marginLeft:"40%"}}
  //     />
  //   );
  // }
  // else {
    return (
      <div
        id={`_${numberPage}`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          marginTop: "20px",
        }}
      >
            
        <NavLink to={`?numberPage=1&limit=5`} style={{ textDecoration: "none" }}><p
          className={isActive && numberPage === "1" ? styles.active : styles.notActive}
          style={pStyle}
          onClick={handelNumberPage}
        >
          1
        </p></NavLink>
        <NavLink to={`?numberPage=2&limit=5`} style={{ textDecoration: "none" }}><p
          className={isActive && numberPage === "2" ? styles.active : styles.notActive}
          style={pStyle}
          onClick={handelNumberPage}
        >
          2
        </p></NavLink>
        <NavLink to={`?numberPage=3&limit=5`} style={{ textDecoration: "none" }}><p
          className={isActive && numberPage === "3" ? styles.active : styles.notActive}
          style={pStyle}
          onClick={handelNumberPage}
        >
          3
        </p></NavLink>
        <NavLink to={`?numberPage=4&limit=5`} style={{ textDecoration: "none" }}><p
          className={isActive && numberPage === "4" ? styles.active : styles.notActive}
          style={pStyle}
          onClick={handelNumberPage}
        >
          4
        </p></NavLink>
      </div>
    );
  // }
};
