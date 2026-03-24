import Navbar from "./Navbar";
import Text from "./Text";
import Pgrid from "./Pgrid";
import './Homepage.css'
function Homepage() {
    return (
        <>
            <div className="hcontainer">
                <Navbar></Navbar>
                <Text></Text>
                <Pgrid></Pgrid>
            </div>
        </>
    )

}
export default Homepage;