import './Spcard.css'
import { useState } from 'react';


function Spcard({ price, title, img, arr, setArr }) {
    let existing = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].title === title) {
            existing = arr[i].count;
        }
    }

    const [count, setCount] = useState(existing);


    function increase() {


        setCount(count + 1);


    }
    function decrese() {
        if (count > 0)
            setCount(count - 1);

    }
    function atc(img, title, count, price) {
        let temp = [...arr];
        let sobj = { title, img, count, price }
        let i = 0;
        let f = 0;
        while (i < temp.length) {
            if (temp[i].title === title) {
                temp[i] = sobj;
                f = 1;

            }
            i++;
        }
        if (f == 0) {
            temp.push({ title, img, count, price })
        }
        setArr(temp);

        console.log(arr);

    }


    return (
        <>
            <div className="scontainer">
                <div className="left">
                    <div><img src={img} alt="Image" height={100} width={100} /></div>
                    <div className="title">{title}</div>
                </div>
                <div className="middle">
                    <div className="modder">
                        <button onClick={() => decrese()}>-</button>
                        <input type="number" className='ip' value={count} onChange={e => setCount(Number(e.target.value))} />
                        <button onClick={() => increase()} >+</button>
                    </div>
                    <div className="price">{price * count}</div>
                </div>
                <div className="right"><button onClick={() => atc(img, title, Number(count), price)}>Add To Cart</button></div>

            </div>
        </>
    )
}

export default Spcard;