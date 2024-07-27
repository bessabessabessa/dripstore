import './Slide.css'
import Ornament from "../../assets/Carrossel/Ornament11.svg"
import TenisNike from "../../assets/Carrossel/White-Sneakers.svg"
import { Link } from 'react-router-dom';

function Slides() {

    return (
        <>
            <section className="section-carrossel">
                <div className="divCarrosselGeral">

                    <div className="ofertasTexto">
                        <p className="paragrafoMOferta">Melhores ofertas personalizadas</p>
                        <h1 id="h1QueimaEstoque">Queima de<br />estoque Nike 🔥</h1>
                        <p className="paragrafoDescricaoOferta">Consequat culpa exercitation mollit nisi excepteur do<br />do tempor laboris eiusmod irure consectetur.</p>
                        <Link to="/detalhesDoProduto"><button className="botaoVendoOfertas">Ver Ofertas</button></Link>
                    </div>

                    <div className="divCarrosselImagens">
                        <div className="divImagensOferta">
                            <img id="imagemOrnament" src={Ornament} alt="" />
                        </div>
                        <img id="ofertaNikeTenis" src={TenisNike} alt="" />
                    </div>
                </div>
            </section>

        </>

    );
}

export default Slides;