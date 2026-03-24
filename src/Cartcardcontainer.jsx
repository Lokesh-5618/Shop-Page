import Cartcard from "./Cartcard";
import { useCart } from './CartContext';
import Navbar from "./Navbar";
import './Cartcardcontainer.css'
function Cartcardcontainer() {
    const { arr, setArr } = useCart();
    let totalprice = 0;
    for (let i = 0; i < arr.length; i++) {
        totalprice += (arr[i].count * arr[i].price)
    }
    console.log(totalprice)

    return (
        <>
            <Navbar></Navbar>
            <div className="total">
                <div>Total Price: </div>
                <div>{totalprice}</div>
            </div>
            <div className="cont">
                {
                    arr.map(ind => {
                        let cartobject = ind;
                        return (<Cartcard key={ind.title} cobj={cartobject} arr={arr} setArr={setArr} />)
                    })
                }

            </div>
        </>
    )
}
export default Cartcardcontainer;