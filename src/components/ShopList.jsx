import React from "react";
import styled from "styled-components";

function ShopList({ value }) {
 // console.log(value);
  return (
    <>
      <Wrapper>
        <Imgwine src={value.image}></Imgwine>
        <p>{value.winery}</p>
        Average:{value.rating.average}
        <br />
        {value.rating.reviews}
      </Wrapper>
    </>
  );
}

export default ShopList;

let Wrapper = styled.div`
  width: 150px;
  height: 250px;
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;
let Imgwine = styled.img`
  width: 100%;
  height: 120px;
`;
