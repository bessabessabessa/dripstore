import React from "react";
import './Produtos.css'
import Line from "../../assets/Produtos/Line.svg"
import Preco from "../../assets/Produtos/preco.png"
import cardTenis from "../../assets/Produtos/tenis.png"

const Produtos = () => {
    return (
        <section class="produtos">
            <div class="divGeralProdutos">
                <div class="div1Produtos">
                    <h3>Produtos em alta</h3>
                    <a href="#"><p>Ver todos <img src={Line} alt="" /></p></a>
                </div>
                <div class="div2Produtos">
                    <div class="cardProduto">
                        <div class="cardCard">
                            <div class="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div class="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p class="pTenis">Tênis</p>
                        <h4 class="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div class="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div class="cardProduto">
                        <div class="cardCard">
                            <div class="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div class="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p class="pTenis">Tênis</p>
                        <h4 class="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div class="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div class="cardProduto">
                        <div class="cardCard">
                            <div class="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div class="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p class="pTenis">Tênis</p>
                        <h4 class="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div class="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div class="cardProduto">
                        <div class="cardCard">
                            <div class="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div class="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p class="pTenis">Tênis</p>
                        <h4 class="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div class="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div class="cardProduto">
                        <div class="cardCard">
                            <div class="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div class="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p class="pTenis">Tênis</p>
                        <h4 class="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div class="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div class="cardProduto">
                        <div class="cardCard">
                            <div class="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div class="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p class="pTenis">Tênis</p>
                        <h4 class="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div class="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div class="cardProduto">
                        <div class="cardCard">
                            <div class="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div class="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p class="pTenis">Tênis</p>
                        <h4 class="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div class="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                    <div class="cardProduto">
                        <div class="cardCard">
                            <div class="desconto">
                                <p>30% OFF</p>
                            </div>
                            <div class="tenisTenis">
                                <img src={cardTenis} alt="" />
                            </div>
                        </div>
                        <p class="pTenis">Tênis</p>
                        <h4 class="h4Tenis">K-Swiss V8 - Masculino</h4>
                        <div class="precoTenis">
                            <img src={Preco} alt="" />
                            <p>$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Produtos;