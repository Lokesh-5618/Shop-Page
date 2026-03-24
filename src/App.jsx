import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Text from './Text'
import Navbar from './Navbar'
import Pgrid from './Pgrid'
import Homepage from './Homepage'
import Spcard from './Spcard'
import Spcardcontainer from './Spcardcontainer'
import Shoppage from './Shoppage'
import Cartcard from './Cartcard'
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
