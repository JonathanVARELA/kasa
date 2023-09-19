import Collapse from "../components/collapse";
import Footer from "../components/footer";
import Header from "../components/header";

function About() {
    const Apropos = [
        {
            "title" : "Fiabilité",
            "Desc" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            "title" : "Respect",
            "Desc" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "title" : "Service",
            "Desc" : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            "title" : "Sécurité",
            "Desc" : "La sécurité est la priorité de Kasa. C'est pourquoi nous assurons un suivi de chaque annonce postée sur notre site. Notre système de paiement vous garantit le versement de vos revenus de manière sûre et rapide."
        }
    ]

    return (
        <div>
            <Header />
            <section className="pageAbout">
                <div className="banniereAbout">
                    <div className="overlay2"></div>
                </div>
                <div className="collapseAbout">
                    {Apropos.map(el => {
                        return (
                            <Collapse key={el.title} title={el.title}>
                                <p>{el.Desc}</p>
                            </Collapse>
                        )
                        })}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About;