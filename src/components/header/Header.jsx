import { Link } from "react-router-dom"
const Header = () =>{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand ms-3" href="#">Cultural Heritage</a>
                <button className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to='/Search'>Search</Link>
                        <Link className="nav-item nav-link" to='/'>Home</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header