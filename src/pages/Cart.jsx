import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import CartItem from '../components/CartItem';
import styled from  'styled-components'

function Cart({value}) {
 const [cart,setCart] =useState([])

 useEffect(()=>{
   
  setCart(value)
 },[])
console.log(cart)

const getData=(e)=>{

 setCart(cart.filter((d)=> d.id!=e.id))
}
const handleSave=()=>{

}
  return (
    <div>
      <Link to='/'><button>Back to home</button></Link>

     {cart.map((e)=>
      <CartItem value1={e} value2={getData}/>
     )} 
      
      <h1>Total amount:Rs 1000</h1>
      <button onClick={handleSave}>Save for Next Time</button>
      <Link to='/checkout'><button>Checkout</button></Link>
    </div>
  )
}

export default Cart
