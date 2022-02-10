import { Outlet, Link } from "react-router-dom"
import { Header } from "./Header"
import './Layout.css'

export const Layout = () => {
    return (
        <div className="container">
            <header id="main-header">
                <Header />
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
                <small>&copy;2022</small><small id="team"> Pajama Llamas</small>
            </footer>
        </div>
    )
}