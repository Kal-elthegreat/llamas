import '../index.css'

export const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <img src="../../public/pj_llama.jpeg"/>
                <h1 className="team-name">Pajama Llamas Voting Party</h1>
                <img src="../../public/pj_llama.jpeg"/>
            </div>
            <div>  
                <span className='team-quote'>"There is not enough time to do all the nothing we want to do"</span>
            </div>
        </div>
    )
}