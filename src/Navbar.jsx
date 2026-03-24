import './Navbar.css'
import { Link } from 'react-router'
function Navbar() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <div className="navright">
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )

}
export default Navbar