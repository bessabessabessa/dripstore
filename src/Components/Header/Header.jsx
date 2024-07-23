import "./Header.css"
import Logo from "../../assets/Images/logo.svg"
import { Link } from "react-router-dom"
import Carrinho from "../../assets/Images/carrinho.svg"

export function Header() {

    return (
        <>
            <div className="banner">
                <Link to='/'><img id="logo" src={Logo} alt="" /></Link>
                <div className="pesquisa">
                    <input type="text" id="pesquisa" placeholder="Pesquisar produtos..."></input>
                </div>
                <div className="cadastro">
                    <Link to='/cadastro' id="cadastro">Cadastre-se</Link>
                </div>
                <div>
                    <Link to='/login' className="button1"><button className="button1">Entrar</button></Link>
                    {/* <a href="">
                        <button className="btn">Entrar</button>
                    </a> */}
                </div>
                <div>
                    <a className="carrinho" href="">
                        <img src={Carrinho} id="carrinho" alt="" />
                    </a>
                </div>
            </div>
            <nav>
                <ul id="menu">
                <Link to='/' id="home"><li>Home</li></Link>
                <Link to='/produtos' id="produtos"><li>Produtos</li></Link>
                <Link to='/categorias' id="categorias"><li>Categorias</li></Link>
                <Link to='/MeusPedidos' id="meus-pedidos"><li>Meus pedidos</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Header