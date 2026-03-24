import './Pgrid.css'
import { useState, useEffect } from 'react';
function Pgrid() {
    const [imagearray, setImagearray] = useState([]);

    let ilist = [];
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
            for (let i = 0; i < 12; i++) {
                console.log(data[i].id);
                ilist.push(data[i].image)

            }
            console.log(ilist)
            setImagearray(ilist);
        })
    }, [])
    return (
        <>
            <div className="gridcontainer">
                {
                    imagearray.map(ind => {
                        return (<div><img src={ind} alt="notfound" height={150} width={150} /></div>)
                    }
                    )
                }



            </div>
        </>
    )
}
export default Pgrid;