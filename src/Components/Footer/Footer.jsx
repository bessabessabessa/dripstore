import './Footer.css'
import LogoWhite from "../../assets/Images/logo-white.svg"
import IconFace from "../../assets/Images/icon-face.svg"
import IconInta from "../../assets/Images/icon-insta.svg"
import IconTwitter from "../../assets/Images/icon-twitter.svg"

export default function Footer () {

  return (
    <>
      <div className="footer">
        <div>
          <div className="footerDigital">
            <img src={LogoWhite} alt="" />
            <p id="paragrafoDigital">Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore.</p>
            <img id="icone1" src={IconFace} alt="" />
            <img id="icone2" src={IconInta} alt="" />
            <img id="icone3" src={IconTwitter} alt="" />

          </div>
          <div className="divInfos">
            <h3>Informação</h3>
            <p className="paragrafo1">Sobre Drip Store</p>
            <p>Segurança</p>
            <p>Wishlist</p>
            <p>Blog</p>
            <p>Trabalhe Conosco</p>
            <p>Meus pedidos</p>
          </div>
          <div className="divCategorias">
            <h3>Categorias</h3>
            <p className="paragrafo1">Camistas</p>
            <p>Calças</p>
            <p>Bonés</p>
            <p>Headphones</p>
            <p>Tênis</p>
          </div>
          <div className="divContato">
            <h3>Contato</h3>
            <p className="paragrafo1">Av. Santos Dumont, 1510 - 1<br /> andar - Aldeota, Fortaleza-<br />CE, 60150-161</p>
            <p>(85) 3051-3411</p>
          </div>
        </div>

        <hr/>
        <p id="textoAno">&copy; 2022 - Digital College</p>
      </div>
    </>

  );
}