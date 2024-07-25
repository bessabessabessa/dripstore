import './App.css';
import HomePage from "./Pages/HomePage";
import PaginaDeLogin from "./Pages/PaginaDeLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaDeProdutos from "./Pages/ProductList";
import Cadastro from './Pages/Cadastro';

import ProductDetail from './Pages/ProductDetail';


function App() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/login" element={<PaginaDeLogin />} />
                    <Route path="/produtos" element={<PaginaDeProdutos />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/detalhesDoProduto" element={<ProductDetail />}/>

                    {/* <Route path="/categorias" element={<PaginaDeLogin />}/> */}
                    {/* <Route path="/meusPedidos" element={<PaginaDeLogin />}/> */}
                    {/* <Route path="*" element={<NoPage />} /> */}
                </Routes>
            </BrowserRouter >
        </>
    )
}
export default App;