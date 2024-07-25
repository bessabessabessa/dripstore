import "./Header.css"
import Logo from "../../assets/Header/logo.svg"
import { Link } from "react-router-dom"
import Carrinho from "../../assets/Header/carrinho.svg"

export function Header() {

    return (
        <>
        <section id="section-header">
            <div className="header">
                <div className="logo">
                <Link to='/'><img id="logo" src={Logo} alt="" /></Link>
                </div>
                <div>
                    <input type="text" id="pesquisa" placeholder="Pesquisar produtos..."></input>
                </div>
                <div className="cadastro">
                    <Link to='/cadastro' id="cadastro">Cadastre-se</Link>
                </div>
                <div>
                    <Link to='/login' className="button1"><button className="button1">Entrar</button></Link>
                </div>
                <div>
                    <a className="carrinho" href="">
                        <img src={Carrinho} id="carrinho" alt="" />
                    </a>
                </div>
            </div>
            </section>
            <section className="section-nav">
            <nav className="menu">
                <ul id="menu">
                <Link to='/' id="home"><li>Home</li></Link>
                <Link to='/produtos' id="produtos"><li>Produtos</li></Link>
                <Link to='/categorias' id="categorias"><li>Categorias</li></Link>
                <Link to='/MeusPedidos' id="meus-pedidos"><li>Meus pedidos</li></Link>
                </ul>
            </nav>
            </section>
        </>
    )
}

export default Header