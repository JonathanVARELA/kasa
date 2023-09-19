import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

function Page404 () {
    return (
        <div>
            <Header />
            <div className="pageError">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n’existe pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Page404;