import './Spcard.css'
import { useState } from 'react';
import { useCart } from './CartContext';

function Spcard({ price, title, img }) {  // remove arr, setArr from props
    const { arr, setArr } = useCart();
    
    const existing = arr.find(item => item.title === title);
    const [count, setCount] = useState(existing?.count || 1);

    function increase() { setCount(count + 1); }
    function decrease() { if (count > 1) setCount(count - 1); }

    function atc() {
        const temp = [...arr];
        const index = temp.findIndex(item => item.title === title);
        if (index !== -1) {
            temp[index] = { title, img, count, price };
        } else {
            temp.push({ title, img, count, price });
        }
        setArr(temp);
    }

    return (
        <div className="scontainer">
            <div className="left">
                <img src={img} alt="Image" height={100} width={100} />
                <div className="title">{title}</div>
            </div>
            <div className="middle">
                <div className="modder">
                    <button onClick={decrease}>-</button>
                    <input type="number" className='ip' value={count} onChange={e => setCount(Number(e.target.value))} />
                    <button onClick={increase}>+</button>
                </div>
                <div className="price">{price * count}</div>
            </div>
            <div className="right">
                <button onClick={atc}>Add To Cart</button>
            </div>
        </div>
    )
}
export default Spcard;
