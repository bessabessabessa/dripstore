import React from "react";
import './Footer.css'
import Logo from "../img/Logo.png"

const Footer = () => {
  const rex = '(85) 3051-3411'
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="logo">
          <h2>Digital Store</h2>
          <img src={Logo} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="icones">
          <a href=""><img src="src/img/image1.png" className="facebook" alt=""/></a>
          <a href=""><img src="src/img/img2.svg" alt=""/></a>
          <a href=""><img src="src/img/img3.svg" alt=""/></a>
        </div>
      </div>
      <div className="footer-section info">
        <h3>Infomação</h3>
        <ul>
          <li><a href="#">Sobre Drip Store</a></li>
          <li><a href="#">Segurança</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Trabalhe Conosco</a></li>
          <li><a href="#">Meus Pedidos</a></li>
        </ul>
      </div>
      <div className="footer-section categories">
        <h3>Categorias</h3>
        <ul>
          <li><a href="#">Camisetas</a></li>
          <li><a href="#">Calças</a></li>
          <li><a href="#">Bonés</a></li>
          <li><a href="#">Headphones</a></li>
          <li><a href="#">Tênis</a></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h3>Contato</h3>
        <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        <p>{rex}</p>
      </div>
      <div className="footer-final">
        <p>&copy; 2022 Digital College</p>
      </div>
    </footer>

  );
};

export default Footer;