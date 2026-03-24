import Navbar from './Navbar.jsx'
import Spcardcontainer from './Spcardcontainer.jsx';
import './Shoppage.css'
import { useCart } from './CartContext';
function Shoppage() {
    const { arr, setArr } = useCart();

    return (


        <div className='container'>
            <Navbar></Navbar>
            <Spcardcontainer arr={arr} setArr={setArr}></Spcardcontainer>
        </div>

    )
}
export default Shoppage;