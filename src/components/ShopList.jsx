import React, { useState } from "react";
import styled from "styled-components";

function ShopList({value,value2}) {
  // console.log(value);
  
  const [cart, setCart] = useState({});

  let handleCart = () => {
    value2(value)
    // setCart({...cart, value});
    console.log(value);
  };
  return (
    <>
      <Wrapper>
        <Imgwine src={value.image}></Imgwine>
        <p>{value.winery}</p>
        {value.wine}
        <br />
        Average:{value.rating.average}
        <br />
        {value.rating.reviews}
        <button onClick={()=> handleCart()}>Add to cart</button>
      </Wrapper>
    </>
  );
}

export default ShopList;

let Wrapper = styled.div`
  width: 200px;
  height: 270px;
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  p {
    margin: 0;
  }
`;
let Imgwine = styled.img`
  width: 100%;
  height: 120px;
`;
