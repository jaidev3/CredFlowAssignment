import "./App.css";
import  Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom'
import { useState } from "react";
function App() {
  const [data,setData]=useState([])
  const getData1=(e)=>{
    setData(e)
  }
  return (
    <div className="App">

      <Routes>
<Route path="/" element={<Home value={getData1}/>}></Route>
<Route path='/checkout' element={<Checkout/>}></Route>
<Route path="/cart"  element={<Cart value={data}/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
