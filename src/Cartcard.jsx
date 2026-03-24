import './Cartcard.css'
import { useState } from 'react';

function Cartcard({ cobj, arr, setArr }) {
    function rem() {
        let temp = [...arr];
        const n = temp.filter(ind => ind.title !== cobj.title);
        setArr(n);

    }
    function updatecount(newcount) {
        if (newcount >= 1) {
            setCount(newcount);
            setArr(arr.map(item =>      // ✅ creates new array
                item.title === cobj.title
                    ? { ...item, count: newcount }
                    : item
            ));
        }


    }

    const [count, setCount] = useState(cobj.count || 0);


    function increase() {


        setCount(count + 1);
        cobj.count = count;


    }
    function decrese() {
        if (count > 0)
            setCount(count - 1);
        cobj.count = count;


    }
    // function atc(img, title, count, price) {
    //     let sobj = { title, img, count, price }
    //     let i = 0;
    //     let f = 0;
    //     while (i < arr.length) {
    //         if (arr[i].title === title) {
    //             arr[i] = sobj;
    //             f = 1;

    //         }
    //         i++;
    //     }
    //     if (f == 0) {
    //         arr.push({ title, img, count, price })
    //     }

    //     console.log(arr);

    // }


    return (
        <>
            <div className="ccontainer">
                <div className="cleft">
                    <div><img src={cobj.img} alt="Image" height={100} width={100} /></div>
                    <div className="title">{cobj.title}</div>
                </div>
                <div className="cmiddle">
                    <div className="cmodder">
                        <button onClick={() => updatecount(count - 1)}>-</button>
                        <input type="number" className='ip' value={count} onChange={e => setCount(Number(e.target.value))} />
                        <button onClick={() => updatecount(count + 1)} >+</button>
                    </div>
                    <div className="cprice">{cobj.price * count}</div>
                </div>
                <div className="cright"><button onClick={() => rem()} >Remove</button></div>

            </div>
        </>
    )
}

export default Cartcard;