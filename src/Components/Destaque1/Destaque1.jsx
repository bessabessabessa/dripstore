import './Destaque1.css'
import BotaoComprar from "../../BotaoComprar/BotaoComprar"
import CamisaStarWars from "../../assets/Destaque/star-wars-camisa.svg"
import TenisDestaque from "../../assets/Destaque/ddd1-tenis.svg"
import Headphones from "../../assets/Destaque/headphone.svg"
import DestaqueParagrafo from "../Destaque1/DestaqueParagrafo"

export default function Destaque () {
    return (
        <section className="section-destaque">
            <div id="paragrafoEmDestaque">
            <DestaqueParagrafo/>
            </div>
        <div className="divDestaquePai">
            <div className="divDestaquePromo1">
            <p  id="descontoDestaque1">30% OFF</p>
            <h3 id="h3Destaque1">Novo drop Supreme</h3>
            <BotaoComprar/>
            <img src={CamisaStarWars} alt=""/>
            </div>
            <div className="divDestaquePromo2">
            <p id="descontoDestaque2">30% OFF</p>
            <h3 id="h3Destaque2">Coleção Adidas</h3>
            <BotaoComprar/>
            <img src={TenisDestaque} alt=""/>
            </div>
            <div className="divDestaquePromo3">
            <p id="descontoDestaque3">30% OFF</p>
            <h3 id="h3Destaque3">Novo Beats Bass</h3>
            <BotaoComprar/>
            <img src={Headphones} alt=""/>
            </div>
        </div>
        </section>
    );
}