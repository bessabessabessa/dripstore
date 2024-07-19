import "./Header.css"
import Logo from "../../assets/Images/logo.svg"
// import { Link } from "react-router-dom"
import Carrinho from "../../assets/Images/carrinho.svg"
import Navbar from "../Navbar/Navbar"

export function Header() {

    return (
        <>
            <div className="banner">
                <img id="logo" src={Logo} alt=""/>
            <div className="pesquisa">
                <input type="text" id="pesquisa" placeholder="Pesquisar produtos..."></input>
            </div>
            <div className="cadastro">
                {/* <Link to='/cadastro'>Cadastre-se</Link> */}
                <a id="cadastro" href=""><u>Cadastre-se</u></a>
            </div>
            <div>
                <a href="">
            <button className="btn">Entrar</button>
               </a>
            </div>
            <div>
            <a className="carrinho" href="">
                <img src={Carrinho} id="carrinho" alt=""/>
            </a>
            </div>
            </div>
            <Navbar/>
        </>
    )
  }

  export default Header