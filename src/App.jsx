import { useState } from 'react'

import './App.css'

import Shoppage from './Shoppage'

import Cartcardcontainer from './Cartcardcontainer'


function App() {
  const [count, setCount] = useState(0)
  const [arr, setArr] = useState([]);


  return (
    <>
      {/* <Homepage></Homepage> */}
      <Shoppage arr={arr} setArr={setArr}></Shoppage>
      {/* <Cartcard></Cartcard> */}

      <Cartcardcontainer arr={arr} setArr={setArr}></Cartcardcontainer>
      {console.log(arr)}




    </>
  )
}

export default App
