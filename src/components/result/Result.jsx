import { useGlobalContext } from "../../context"

const Result = () =>{
    const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
    const {heritages, isLoading} = useGlobalContext();
    if(isLoading){
        return <div className="Loading"></div>
    }
    return(
        <section className="heritages">
            <div className="row">
            {heritages.map((heritage)=>{
                const {
                    country: location, 
                    dcTitleLangAware: { en: [name] = [] } = {},  
                    edmPreview: [img] = [url],                    
                    dcDescriptionLangAware: { en: [description] = [] } = {}  
                } = heritage || {};
                return(
                    <div className="card col-sm-12 col-lg-3">
                        <article>
                            <img className="img-fluid" src={img} alt={name} />
                            <h2>{name}</h2>
                            <p>{description}</p>                      
                        </article>
                    </div>
                )
            })}
            </div>
        </section>
    )
}
export default Result