import React from "react";
import './Carrossel.css'
import Ornament from "../../assets/Carrossel/Ornament.png"
import Sneakers from "../../assets/Carrossel/Sneakers.png"

const Carrossel = () => {
    return (
        <section class="carrossel">
            <div class="divGeral">
                <div class="div1">
                    <div class="chamada" >
                        <h3>Melhores ofertas personalizadas</h3>
                        <h1>Queima de stoque Nike 🔥</h1>
                        <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <button>Ver Ofertas</button>
                    </div>
                </div>
                <div className="div2">
                    <div class="ornamento">
                        <img src={Ornament} alt="" />
                    </div>
                </div>
                <div className="div3">
                    <div class="tenis">
                        <img src={Sneakers} alt="" />
                    </div>
                </div>
                <div className="div4">
                    <div class="slide">
                        <input type="radio" name="redio" id="" checked/>
                        <input type="radio" name="redio" id="" />
                        <input type="radio" name="redio" id="" />
                        <input type="radio" name="redio" id="" />
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Carrossel;