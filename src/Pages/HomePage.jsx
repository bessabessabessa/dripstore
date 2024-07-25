// import Carrossel from "../Components/Carrossel/Carrossel";
import Header from "../Components/Header/Header";
import Oferta from "../Components/Oferta/Oferta";
import Footer from "../Components/Footer/Footer";
import Destaque from "../Components/Destaque1/Destaque"



function HomePage() {
    return (
        <>
            <div>
                <Header/>
                {/* <Carrossel/> */}
                <Destaque />
                <Oferta/>
                <Footer/>
            </div>
        </>
    )
}
export default HomePage;