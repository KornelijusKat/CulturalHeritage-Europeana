import Search from "../search/Search"
import Instruction from "../instruction/Instruction"
import {Link} from "react-router-dom"
const Home = () => {
    return(
        <main>
            <Instruction></Instruction>
            <Link className="link" to='/Search'>Search</Link>
        </main>
    )
}
export default Home