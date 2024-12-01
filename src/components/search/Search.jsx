import { useGlobalContext } from "../../searchContext";
import Result from "../result/Result";
import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './search.scss'

const Search = () =>{
    const {query, setQuery, error} = useGlobalContext();
    const [inputValue, setInputValue] = useState(query);
    const navigate = useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault();
        setQuery(inputValue.trim());
        if(error.show){
            return
        }
        navigate('/Results')
        setInputValue('');
    }
    return (
        <>
          <div className="form-container">
            <form className="form-inline" onSubmit={handleSubmit}>
                <h2>Search Cultural heritage</h2>
                <input
                    type='text'
                    className='form-control mr-sm-2'
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                />         
                {error.show && <div className="error">{error.msg}</div>}  
                <button type="submit" className="btn btn-primary mt-2">Search</button>
            </form>
        </div>
        </>
    )
}
export default Search