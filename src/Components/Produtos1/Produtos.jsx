import './Produtos.css';
// import { Link } from "react-router-dom";

export default function Produtos() {
    return (
        <>
            <section className="section-produtos">
                <div className="produtosGeral">

                    <div className="div-produtos">

                        <div className="paragrafo1P">
                            <p className="paragrafoEmAlta">Produtos em alta</p>
                            <a href="#" id="linkVerTodosP">Ver todos →</a>
                        </div>

                        <div className="cardsProdutosAlta">
                        <div className="cardP1">
                            <p>30% OFF</p>
                            <img/>
                            <div>
                            <p></p>
                            <p></p>
                            <p></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    );
}