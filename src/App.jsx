import './App.css';
import HomePage from "./Pages/HomePage"
import PaginaDeLogin from "./Pages/PaginaDeLogin"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./Components/Produtos/Produtos"
import Cadastro from './Pages/Cadastro';



// const HomePage = () => <HomePage />

function App() {
    return (
        <>
            {/* <div className="App">
                <HomePage />
            </div> */}

            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<PaginaDeLogin />} />
                    <Route path="/produtos" element={<Produtos />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    {/* <Route path="/categorias" element={<PaginaDeLogin />}/> */}
                    {/* <Route path="/meusPedidos" element={<PaginaDeLogin />}/> */}
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>
            </BrowserRouter >
        </>
    )
};
export default App;