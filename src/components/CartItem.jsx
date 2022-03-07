import React from "react";

function CartItem({value1}) {
//   const { cartItem } = props;
console.log({value1})
  return (
    <div>
      <h3>{value1.winery}</h3>
      <button >delete</button>
    </div>
  );
}

export default CartItem;
