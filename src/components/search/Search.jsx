import { useGlobalContext } from "../../context";
import Result from "../result/Result";
import { Link } from "react-router-dom";

const Search = () =>{
    const {query, setQuery, error} = useGlobalContext();
    return (
        <>
            <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
                <h2>Search Art</h2>
                <input
                    type='text'
                    className='form-input'
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                />
                <button onSubmit={(e)=>setQuery(e.target.value)}></button>
                {error.show && <div className="error">{error.msg}</div>}
            </form>
            <Link to='/Results'>Search</Link>
        </>
    )
}
export default Search