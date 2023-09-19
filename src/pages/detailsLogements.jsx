import { useParams } from "react-router-dom";
import datas from "../data/logements.json";
import Header from "../components/header";
import Footer from "../components/footer";
import Carousel from "../components/carousel";
import Collapse from "../components/collapse";
import RatingStars from "../components/ratings";

function FicheLogement () {
    const { id } = useParams();

    const data = datas.find((el) => el.id === id);

    const fullName = data.host.name;
    const [firstName, lastName] = fullName.split(' ');

    return (
        <>
        <Header />
        <div className="Carousel-logement">
            <Carousel pictures={data.pictures} title={data.title}/>
            <div className="Carousel-logement-content">
                <div className="flex-container1">
                <div className="flex-column1">
                    <h1>{data.title}</h1>
                    <p>{data.location}</p>
                </div>
                <div className="flex">
                <div className="hostName">
                    <p>{firstName}</p>
                    <p>{lastName}</p>
                </div>
                    <img src={data.host.picture} alt={data.host.name} />
                </div>
                </div>
                <div className="flex-container2">
                <div className="tags">
                    <p>{data.tags}</p>
                </div>
                <div>
                    <RatingStars rating={data.rating} />
                </div>
                </div>
                <div className='flex-container3'>
                    <Collapse title="Description" >
                        <p>{data.description}</p>
                    </Collapse>
                    <Collapse title="équipements" >
                        <ul>
                            {data.equipments.map((el, index) => {
                                return <li key={index}>{el}</li>
                            })}
                        </ul>
                    </Collapse>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default FicheLogement;