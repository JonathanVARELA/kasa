import Footer from "../components/footer";
import Header from "../components/header";
import datas from "../data/logements.json";

import "../styles/style.css";
import Card from "../components/cards";

function Home () {
    return (
        <div>
            <Header />
            <main>
            <section className="banniereAccueil">
                <h1>Chez vous, partout et ailleurs</h1>
                <div className="overlay"></div>
            </section>
            <section className="Gallery">
                <div className="GalleryItem">
                    {datas.map((el) => (
                        <Card title={el.title} cover={el.cover} id={el.id} key={el.id} />
                    ))}
                </div>
            </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;