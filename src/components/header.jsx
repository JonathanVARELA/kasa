import { Link, NavLink } from "react-router-dom";
import "../styles/layouts/header.css"

function Header () {
    return (
        <header>
            <Link to="/"><img src="/LOGO.png" alt="logo" /></Link>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header;