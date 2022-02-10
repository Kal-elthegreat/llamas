import { Outlet,Link } from "react-router-dom"
import './Layout.css'

export const Layout = () => {
    return (
        <div className="container">
            <header id="main-header">
                <h1>Pajama Llamas Voting Party</h1>
            </header>

            <nav id="main-nav">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='register'>Register</Link></li>
                    <li><Link to='election'>Election</Link></li>
                    
                </ul>
            </nav>

            <main id='main-content'>
                <Outlet/>
            </main>
            <footer id="footer">
                <small>&copy; "There is not enough time to do all the nothing we want to do", Llamas Pajamas </small>
            </footer>
        </div>
    )
}