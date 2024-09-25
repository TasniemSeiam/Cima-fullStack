import React, { forwardRef } from "react";
import { styled } from "styled-components";

const Filter = forwardRef(
  (
    {
      numberFilters = 2,
      values = ["title", "vote_average"],
      handelSubmitSorting,
    },
    ref
  ) => {
    const FormStyled = styled.form`
      margin-left: 10px;
      text-align: center;
      & label {
        padding: 5px;
        font-size: 17px;
        font-weight: 700;
        color: #03698a;
        text-transform: Capitalize;
  
        & input {
          margin-right: 3px;
        }
      }
      & button {
        border: none;
        background-color: #03698a;
        color: #fff;
        padding: 3px 7px;
        border-radius: 3px;
        margin-left: 7px;
        border: 1px solid #03698a;
  
        &:hover {
          color: #03698a;
          background-color: #fff;
          border: 1px solid #03698a;
        }
      }
    `;

    if (numberFilters !== values.length) {
      console.error("number of filter must match values length");
      return;
    }
    return (
      <>
        <form ref={ref} onSubmit={handelSubmitSorting} style={{ marginLeft: "10px",
          textAlign: "center"}}>
          {values.map((value) => (
            <label>
              <input type="radio" name="sort" value={value} />
              {value}
            </label>
          ))}
          <br />
          <label>
            <input type="radio" name="order" value="asc" />
            asc
          </label>
          <label>
            <input type="radio" name="order" value="desc" />
            desc
          </label>
          <button type="submit">sort</button>
        </form>
      </>
    );
  }
);
export default Filter;
