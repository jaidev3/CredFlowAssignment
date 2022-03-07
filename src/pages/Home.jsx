import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShopList from "../components/ShopList";
import { Link } from "react-router-dom";
import list from "../db.json";
import ReactPaginate from "react-paginate";

function Home({value}) {
  const [sortf, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  ////pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(data.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setData(list);
  }, []);
//////cart function///////
const [cart,setCart]=useState([]);

const getData=(e)=>{
  setCart([...cart,e])
  value(cart)
}
//console.log(cart)

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setSort(e.target.value);
    console.log(sortf);
  };

  // console.log(data);
  return (
    <>
      <div>
        <Link to="/cart">
          <button>Go to cart</button>
        </Link>
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={handleSearch}
            type="text"
            name="search"
            placeholder="search"
          />
          <br />
          <label>Filter by rating:</label>
          <select
            onInput={handleFilter}
            name="location"
            placeholder="choose location"
          >
            <option value="4.7">4.7</option>
            <option value="4.8">4.8</option>
          </select>
        </form>
        <br />
      </div>
      {/* wine list map */}
      <Wrapper>
        {data
          .filter((e) => {
            if (search === "") return e;
            else if (e.winery.toLowerCase().includes(search.toLowerCase())) {
              return e;
            }
            if (e.rating.average == sortf) return e;
          })
          .filter((e) => {
            if (sortf === "") return e;
            else if (e.rating.average == sortf) return e;
          })
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((e) => {
            return (
              <>
                <ShopList key={e.id} value={e} value2={getData} />
              </>
            );
          })}
      </Wrapper>

      {/* pagination */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
      />
    </>
  );
}

export default Home;

const Wrapper = styled.div`
  width: 90%;
  border: 1px solid black;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px;
`;
