import React from "react";

function CartItem({value1,value2}) {
//   const { cartItem } = props;
console.log({value1})
const handleClick=()=>{
  value2(value1)
}
  return (
    <div>
      <h3>{value1.winery}</h3>
      <button onClick={handleClick}>delete</button>
    </div>
  );
}

export default CartItem;
