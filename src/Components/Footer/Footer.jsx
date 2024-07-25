import './Footer.css'
import LogoWhite from "../../assets/Images/logo-white.svg"
import IconFace from "../../assets/Images/icon-face.svg"
import IconInta from "../../assets/Images/icon-insta.svg"
import IconTwitter from "../../assets/Images/icon-twitter.svg"

export default function Footer () {

  return (
    <>
    <section className="section-footer">
      <div className="footer">
        <div>
          <div className="footerDigital">
            <img src={LogoWhite} alt="" />
            <p id="paragrafoDigital">Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore.</p>
            <div className='icones-redes'>
            <img id="icone1" src={IconFace} alt="" />
            <img id="icone2" src={IconInta} alt="" />
            <img id="icone3" src={IconTwitter} alt="" />
            </div>
          </div>
          
          <div className="divFinalFooter">
          <div className="divInfos">
            <h3 className="h3Footer">Informação</h3>
            <p className="paragrafo1">Sobre Drip Store</p>
            <p className="paragrafo1">Segurança</p>
            <p className="paragrafo1">Wishlist</p>
            <p className="paragrafo1">Blog</p>
            <p className="paragrafo1">Trabalhe Conosco</p>
            <p className="paragrafo1">Meus pedidos</p>
          </div>
          <div className="divCategorias">
            <h3 className="h3Footer">Categorias</h3>
            <p className="paragrafo1">Camistas</p>
            <p className="paragrafo1">Calças</p>
            <p className="paragrafo1">Bonés</p>
            <p className="paragrafo1">Headphones</p>
            <p className="paragrafo1">Tênis</p>
          </div>
          <div className="divContato">
            <h3 className="h3Footer">Contato</h3>
            <p className="paragrafo1">Av. Santos Dumont, 1510 - 1<br /> andar - Aldeota, Fortaleza-<br />CE, 60150-161</p>
            <p className="paragrafo1">(85) 3051-3411</p>
            </div>
          </div>
        </div>

        <hr/>
        <p id="textoAno">&copy; 2022 - Digital College</p>
      </div>
      </section>
    </>

  );
}