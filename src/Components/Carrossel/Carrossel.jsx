import React from "react";
import './Carrossel.css'
import Ornament from "../../assets/Carrossel/Ornament.png"
import Sneakers from "../../assets/Carrossel/Sneakers.png"

const Carrossel = () => {
    return (
        <section>
            {/* <div id="ornamento"> */}
                <div id="chamada">
                    <h3>Melhores ofertas personalizadas</h3>
                    <h1>Queima de stoque Nike 🔥</h1>
                    <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                    <button>Ver Ofertas</button>
                </div>
                <img src={Ornament} alt="" id="imagemOnr" />
            {/* </div> */}
        </section>
    )
};
export default Carrossel;