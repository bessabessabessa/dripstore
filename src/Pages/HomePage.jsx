// import Carrossel from "../Components/Carrossel/Carrossel";
// import Destaque from "../Components/Destaque/Destaque";
import Header from "../Components/Header/Header";
import Oferta from "../Components/Oferta/Oferta";
import Footer from "../Components/Footer/Footer";
import Destaque from "../Components/Destaque1/Destaque1";



function HomePage() {
    return (
        <>
            <div>
                <Header/>
                {/* <Carrossel/>
                <Destaque/> */}
                <Destaque/>
                <Oferta/>
                <Footer/>

                
            </div>
        </>
    )
}
export default HomePage;