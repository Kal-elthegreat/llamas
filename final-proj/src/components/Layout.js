import { Outlet,Link } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="container">
            <header id="main-header">

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
            <footer>
                <small>&copy; "There is not enough time to do all the nothing we want to do", Llamas Pajamas </small>
            </footer>
        </div>
    )
}