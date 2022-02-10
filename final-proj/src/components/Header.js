import mascot from '../imgs/llama.jpeg'
import '../index.css'

export const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <img src={mascot} alt='llama in pjs'/>
                <h1 className="team-name">Pajama Llamas Voting Party</h1>
                <img src={mascot} alt='llama in pjs'/>
            </div>
            <div>  
                <span className='team-quote'>"There is not enough time to do all the nothing we want to do"</span>
            </div>
        </div>
    )
}