import './instruction.scss'
const Instruction = () =>{
    return(
        <section>
            <div className="instruction-container">
                <article>
                    <p>How to use the application:</p>
                    <p>Create .env file with a:
                    VITE_REACT_APP_API_KEY = (your key)</p>
                    <p>In the search page, you can enter any term related to somekind of cultural item and it will show an image of it
                        , with a name and description but not all of them are available in English</p>
                    <p>After search is complete you will be sent to result page where cards will be shown with results</p>
                </article>
            </div>
        </section>
    )
}
export default Instruction