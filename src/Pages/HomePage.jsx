import Carrossel from "../Components/Carrossel/Carrossel";
// import Destaque from "../Components/Destaque/Destaque";
import Header from "../Components/Header/Header";
import Oferta from "../Components/Oferta/Oferta";
import Footer from "../Components/Footer/Footer";
import Produtos from "../Components/Produtos/Produtos";
import Destaque from "../Components/Destaque1/Destaque"



function HomePage() {
    return (
        <>
            <div>
                <Header/>
                <Carrossel/>
                <Destaque/>
                <Produtos />
                <Oferta/>
                <Footer/>
            </div>
        </>
    )
}
export default HomePage;