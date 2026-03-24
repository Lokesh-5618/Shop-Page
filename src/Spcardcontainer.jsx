import { useEffect, useState } from "react";
import Spcard from "./Spcard";
import './Spcardcontainer.css'
function Spcardcontainer({ arr, setArr }) {
    const [darray, setDarray] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(data => data.json()).then(data => {




            setDarray(data.slice(0, 12))

        }
        )


    }, [])

    return (<>

        <div className="cont">
            {
                darray.map(ind => {
                    return (<Spcard key={ind.id} price={ind.price} title={ind.title} img={ind.image} arr={arr} setArr={setArr} />)
                })
            }
        </div>
    </>)
}
export default Spcardcontainer;