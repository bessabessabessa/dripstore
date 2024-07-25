import './Destaque.css'
import CamisaStarWars from "../../assets/Destaque/camisaStar.png"
import TenisDestaque from "../../assets/Destaque/ddd1-tenis.svg"
import Headphones from "../../assets/Destaque/headphone.svg"
import Camisa from "../../assets/Destaque/tshirt-_1_.svg"
import Calça from "../../assets/Destaque/pants.svg"
// import Boné from "../../assets/Destaque/"
import Headphone from "../../assets/Destaque/headphones_1.svg"
import Tênis from "../../assets/Destaque/sneakers1.svg"

export default function Destaque() {
    return (
        <>
            <section className="section-destaque">
                <div className="divDestaque">
                    <p className="paragrafoColecao">Coleções em destaque</p>
                    <div className="divDestaque1">
                        <div className="divDestaquePromo1">
                            <div className="textoDestaque">
                                <p className="paragrafoDestaque">30% OFF</p>
                                <h3 className="h3Destaque">Novo drop Supreme</h3>
                                <a href="#" className="botaoComprar">Comprar</a>
                            </div>
                            <img src={CamisaStarWars} alt="" />
                        </div>
                        <div className="divDestaquePromo1">
                            <div className="textoDestaque">
                                <p className="paragrafoDestaque">30% OFF</p>
                                <h3 className="h3Destaque">Coleção Adidas</h3>
                                <a href="#" className="botaoComprar">Comprar</a>
                            </div>
                            <img src={TenisDestaque} alt="" />
                        </div>
                        <div className="divDestaquePromo1">
                            <div className="textoDestaque">
                                <p className="paragrafoDestaque">30% OFF</p>
                                <h3 className="h3Destaque">Novo Beats Bass</h3>
                                <a href="#" className="botaoComprar">Comprar</a>
                            </div>
                            <img src={Headphones} alt="" />
                        </div>
                    </div>

                </div>


            </section>
            <section className="divDestaque2">
                <p className="colecaoP">Coleções em destaque</p>
                <div className="destaqueColecoes">
                    <div className="destaqueColecoes1">
                        <div className="divImagem">
                            <img src={Camisa} className="colecoes" />
                        </div>
                        <p className="itensDestaque">Camisetas</p>
                    </div>

                    <div className="destaqueColecoes1">
                        <div className="divImagem">
                            <img src={Calça} className="colecoes" />
                        </div>
                        <p className="itensDestaque">Calças</p>
                    </div>

                    <div className="destaqueColecoes1">
                        <div className="divImagem">
                            <img src={Camisa} className="colecoes" />
                        </div>
                        <p className="itensDestaque">Bonés</p>
                    </div>

                    <div className="destaqueColecoes1">
                        <div className="divImagem">
                            <img src={Headphone} className="colecoes" />
                        </div>
                        <p className="itensDestaque">Headphones</p>
                    </div>

                    <div className="destaqueColecoes1">
                        <div className="divImagem">
                            <img src={Tênis} className="colecoes" />
                        </div>
                        <p className="itensDestaque">Tênis</p>
                    </div>


                </div>
            </section>
        </>
    );
}