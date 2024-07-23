import React from "react";
import './Carrossel.css'
import Ornament from "../../assets/Carrossel/Ornament.png"
import Sneakers from "../../assets/Carrossel/Sneakers.png"
import Fire from "../../assets/Carrossel/fire.png"

const Carrossel = () => {
    return (
        <section className="carrossel">
            <div className="divGeralCarrossel">
                <div className="div1Carrossel">
                    <div className="chamada" >
                        <h3>Melhores ofertas personalizadas</h3>
                        <h1>Queima de stoque Nike <img src={Fire} alt="" /></h1>
                        <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <button>Ver Ofertas</button>
                    </div>
                </div>
                <div className="div2Carrossel">
                    <div className="ornamento">
                        <img src={Ornament} alt="" />
                    </div>
                </div>
                <div className="div3Carrossel">
                    <div className="tenis">
                        <img src={Sneakers} alt="" />
                    </div>
                    {/* <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Sneakers} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Sneakers} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={Sneakers} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div> */}
                </div>
                <div className="div4Carrossel">
                    <div className="slide">
                        <input type="radio" name="redio" id="" />
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