import { useGlobalContext } from "../../searchContext"
import './result.scss'
const Result = () =>{
    const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
    const {heritages, isLoading,error} = useGlobalContext();
    if(isLoading){
        return <div className="Loading"></div>
    }
    return(
        <section className="heritages">
            <div className="row mx-auto gap-2">
            {heritages.map((heritage)=>{
                const {
                    country: location, 
                    dcTitleLangAware: { en: [name] = ['English title not available'] } = {},  
                    edmPreview: [img] = [url],                    
                    dcDescriptionLangAware: { en: [description] = ["No Description available"] } = {}  
                } = heritage || {};
                return(
                    <div className="card col-sm-12 col-md-3 col-lg-3 mt-2 mx-auto" key={heritage.id || name}>
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