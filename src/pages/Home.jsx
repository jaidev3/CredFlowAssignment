import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShopList from "../components/ShopList";
import list from "../db.json";

function Home() {
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleInput = (e) => {
    list.sort((a,b)=>a-b)
    setSort(e.target.value);
  };
 // console.log(list);
  return (
    <>
    <div>
    <form action="" onSubmit={handleSubmit}>
        <input
          onChange={handleSearch}
          type="text"
          name="search"
          placeholder="search"
        />

        <select
          onChange={handleInput}
          name="location"
          placeholder="choose location"
        >
          <option value="rating">rating</option>
          <option value="review">review</option>
        </select>
        <input type="submit" value="Enter"></input>
      </form><br/>
    </div>
    <Wrapper>
     

      {list
        .filter((e) => {
          if (search === "") return e;
          else if (e.winery.toLowerCase().includes(search.toLowerCase())) {
            return e;
          }
        })
        .map((e) => {
          return (
            <>
              <ShopList key={e.id} value={e} />
            </>
          );
        })}
    </Wrapper>
    </>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 90%;
  border: 1px solid black;
  margin: auto;
  display: flex;
  flex-wrap:wrap ;
  flex-direction: row;
`;
