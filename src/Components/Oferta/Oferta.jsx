import './Oferta.css'
import AirJordan from "../../assets/Oferta/air-jordan.svg"
import Ellipse from "../../assets/Oferta/Ellipse-11.svg"
import { Link } from 'react-router-dom';


function Oferta() {

    return (
        <section className="section-oferta">
            <div className="oferta">
                <div className="imagensOferta1">
                    <img id="ellipse" src={Ellipse} alt="Um ellipse na cor linear gradient" />
                    <div className="imagensOferta2">
                        <img id="airJordan" src={AirJordan} alt="Um par de tênis preto com branco e alguns detalhes verde limão." />
                    </div>
                </div>
                <div className="text">
                    <p id="ofertaEspecial">Oferta especial</p>
                    <h2 id="h2Oferta">Air Jordan edição de <br /> colecionador</h2>
                    <p id="descricao-oferta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim<br />ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br /> aliquip</p>
                    <Link to="/Ofertas"><button id="verOferta">Ver Oferta</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Oferta;