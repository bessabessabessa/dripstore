import "./Header.css"
import Logo from "../../assets/Images/logo.svg"
import { Link } from "react-router-dom"
import Carrinho from "../../assets/Images/carrinho.svg"

export function Header() {

    return (
        <>
            <div className="banner">
                <img id="logo" src={Logo} alt=""/>
            <div className="pesquisa">
                <input type="text" id="pesquisa" placeholder="Pesquisar produtos..."></input>
            </div>
            <div>
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
                <img src={Carrinho} alt=""/>
            </a>
            </div>
            </div>
        </>
    )
  }

  export default Header