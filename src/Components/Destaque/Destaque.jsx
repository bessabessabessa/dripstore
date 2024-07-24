import React from "react";
import './Destaque.css'
import Frame1 from "../../assets/Destaque/Frame1.svg"
import Frame2 from "../../assets/Destaque/Frame2.svg"
import Frame3 from "../../assets/Destaque/Frame3.svg"
import Frame4 from "../../assets/Destaque/Frame4.svg"
import Frame5 from "../../assets/Destaque/Frame5.svg"
import Card1 from "../../assets/Destaque/card1.png"
import Card2 from "../../assets/Destaque/card2.png"
import Card3 from "../../assets/Destaque/card3.png"

const Destaque = () => {
  return (
    <section className="section-destaque">
      <div className="container">
        <p>Coleções em destaque</p>
        <div className="div2Destaque">
          <div className="cardDestaque">
            <div className="cardTexto">
              <p>30% OFF</p>
              <h3>Novo drop<br></br>Supreme</h3>
              <button>Comprar</button>
            </div>
            <img src={Card1} alt="" className="cardImagem" />
          </div>
          <div className="cardDestaque">
            <div className="cardTexto">
              <div>
                <p>30% OFF</p>
              </div>
              <h3>Novo drop<br></br>Supreme</h3>
              <button>Comprar</button>
            </div>
            <img src={Card2} alt="" className="cardImagem" />
          </div>
          <div className="cardDestaque">
            <div className="cardTexto">
              <div>
                <p>30% OFF</p>
              </div>
              <h3>Novo drop<br></br>Supreme</h3>
              <button>Comprar</button>
            </div>
            <img src={Card3} alt="" className="cardImagem" />
          </div>
        </div>
        {/* <div className="div3Destaque">
          <p>Coleções em destaque</p>
        </div>
        <div className="div4Destaque">
          <div className="divFrame">
            <div className="frame"><img src={Frame1} alt="" /></div>
            <p>Camisetas</p>
          </div>
          <div className="divFrame">
            <div className="frame"><img src={Frame2} alt="" /></div>
            <p>Calças</p>
          </div>
          <div className="divFrame">
            <div className="frame"><img src={Frame3} alt="" /></div>
            <p>Bonés</p>
          </div>
          <div className="divFrame">
            <div className="frame"><img src={Frame4} alt="" /></div>
            <p>Headphones</p>
          </div>
          <div className="divFrame">
            <div className="frame"><img src={Frame5} alt="" /></div>
            <p>Tênis</p>
          </div>
        </div> */}
      </div>
    </section>
  )
};
export default Destaque;