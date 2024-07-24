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
    <section class="destaque">
      <div class="divGeralDestaque">
        <div class="div1Destaque">
          <p>Coleções em destaque</p>
        </div>
        <div class="div2Destaque">
          <div class="cardDestaque">
            <div class="cardTexto">
              <div>
                <p>30% OFF</p>
              </div>
              <h3>Novo drop<br></br>Supreme</h3>
              <button>Comprar</button>
            </div>
            <img src={Card1} alt="" class="cardImagem"/>
          </div>
          <div class="cardDestaque">
            <div class="cardTexto">
              <div>
                <p>30% OFF</p>
              </div>
              <h3>Novo drop<br></br>Supreme</h3>
              <button>Comprar</button>
            </div>
            <img src={Card2} alt="" class="cardImagem"/>
          </div>
          <div class="cardDestaque">
            <div class="cardTexto">
              <div>
                <p>30% OFF</p>
              </div>
              <h3>Novo drop<br></br>Supreme</h3>
              <button>Comprar</button>
            </div>
            <img src={Card3} alt="" class="cardImagem"/>
          </div>
        </div>
        <div class="div3Destaque">
          <p>Coleções em destaque</p>
        </div>
        <div class="div4Destaque">
          <div class="divFrame">
            <div class="frame"><img src={Frame1} alt="" /></div>
            <p>Camisetas</p>
          </div>
          <div class="divFrame">
            <div class="frame"><img src={Frame2} alt="" /></div>
            <p>Calças</p>
          </div>
          <div class="divFrame">
            <div class="frame"><img src={Frame3} alt="" /></div>
            <p>Bonés</p>
          </div>
          <div class="divFrame">
            <div class="frame"><img src={Frame4} alt="" /></div>
            <p>Headphones</p>
          </div>
          <div class="divFrame">
            <div class="frame"><img src={Frame5} alt="" /></div>
            <p>Tênis</p>
          </div>
        </div>
      </div>
    </section>
  )
};
export default Destaque;