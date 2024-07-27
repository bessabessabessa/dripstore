import './Footer.css'
import LogoWhite from "../../assets/Footer/logo-white.svg"
import IconFace from "../../assets/Footer/icon-face.svg"
import IconInta from "../../assets/Footer/icon-insta.svg"
import IconTwitter from "../../assets/Footer/icon-twitter.svg"
import { Link } from "react-router-dom"

export default function Footer() {

  return (
    <>
      <section className="section-footer">
        <div className="footer">
          <div>
            <div className="footerDigital">
              <Link to="/"><img src={LogoWhite} alt="" /></Link>

              <p id="paragrafoDigital">Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore.</p>
              <div className='icones-redes'>
                <a href="#"><img id="icone1" src={IconFace} alt="logo do facebook" /></a>
                <a href="#"><img id="icone2" src={IconInta} alt="logo do instagram" /></a>
                <a href="#"><img id="icone3" src={IconTwitter} alt="logo do twitter" /></a>
              </div>
            </div>

            <div className="divFinalFooter">
              <div className="divInfos">
                <h3 className="h3Footer">Informação</h3>
                <a href="#" className="paragrafo1Footer">Sobre Drip Store</a>
                <a href="#" className="paragrafo1Footer">Segurança</a>
                <a href="#" className="paragrafo1Footer">Wishlist</a>
                <a href="#" className="paragrafo1Footer">Blog</a>
                <a href="#" className="paragrafo1Footer">Trabalhe Conosco</a>
                <Link to="/MeusPedidos" className="paragrafo2Footer"><p>Meus Pedidos</p></Link>
              </div>
              <div className="divCategorias">
                <h3 className="h3Footer">Categorias</h3>
                <Link to="/produtos" className="paragrafo1Footer">Camisetas</Link>
                <Link to="/produtos" className="paragrafo1Footer">Calças</Link>
                <Link to="" className="paragrafo1Footer">Bonés</Link>
                <Link to="" className="paragrafo1Footer">Headphones</Link>
                <Link to="" className="paragrafo1Footer">Tênis</Link>
              </div>
              <div className="divContato">
                <h3 className="h3Footer">Contato</h3>
                <p className="paragrafo1Footer">Av. Santos Dumont, 1510 - 1<br /> andar - Aldeota, Fortaleza-<br />CE, 60150-161</p>
                <p className="paragrafo1Footer">(85) 3051-3411</p>
              </div>
            </div>
          </div>

          <hr />
          <p id="textoAno">&copy; 2022 - Digital College</p>
        </div>
      </section>
    </>

  );
}