import { useGlobalContext } from "../../context";

const Search = () =>{
    const {query, setQuery, error} = useGlobalContext();
    return (
        <form className="search-form">
            <h2>Search Art</h2>
            <input
                type='text'
                className='form-input'
                value={query}
                onChange={()=>setQuery(e.target.value)}
            />
            {error.show && <div className="error">{error.msg}</div>}
        </form>
    )
}
export default Search