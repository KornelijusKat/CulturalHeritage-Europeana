import { useGlobalContext } from "../../searchContext"
import './result.scss'
const Result = () =>{
    const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
    const {heritages, isLoading,error} = useGlobalContext();
    if(isLoading){
        return <div className="loading">
            <h2>Loading</h2>
            </div>
    }
    console.log(heritages)
    if(heritages.length === 0){
        return (
            <div className="container">
                <h2>No results found</h2>
            </div>
        )
    }
    return(
        <section className="heritages">
            <div className="row mx-auto gap-2">
            {heritages.map((heritage)=>{
                const {
                    country: location, 
                    dcTitleLangAware: { en: [name] = ['English title not available'] } = {},  
                    edmPreview: [img] = [url],                    
                    dcDescriptionLangAware: { en: [description] = ["No Description available"] } = {},
                    id: itemId,
                    link: furtherLink  
                } = heritage || {};
                return(
                    <div className="card col-sm-12 col-md-3 col-lg-3 mt-2 mx-auto" key={heritage.id || itemId}>
                        <article className="py-2 mx-auto">
                            <img className="img-fluid" src={img} alt={name} />
                            <h2>{name}</h2>
                            <p>{description}</p>            
                        </article>
                    </div>
                )
            })}
              {error.show && <div className="error">{error.msg}</div>}
            </div>
        </section>
    )
}
export default Result