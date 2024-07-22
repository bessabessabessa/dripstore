import React from "react";
import './Destaque.css'
import Group1 from "../../assets/Destaque/Group1.png"
import Group2 from "../../assets/Destaque/Group2.png"
import Group3 from "../../assets/Destaque/Group3.png"
import Frame1 from "../../assets/Destaque/Frame1.svg"
import Frame2 from "../../assets/Destaque/Frame2.svg"
import Frame3 from "../../assets/Destaque/Frame3.svg"
import Frame4 from "../../assets/Destaque/Frame4.svg"
import Frame5 from "../../assets/Destaque/Frame5.svg"

const Destaque = () => {
  return (
    <section class="destaque">
      <div class="divGeralDestaque">
        <div class="div1Destaque">
          <p>Coleções em destaque</p>
        </div>
        <div class="div2Destaque">
          <img src={Group1} alt="" />
          <img src={Group2} alt="" />
          <img src={Group3} alt="" />
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