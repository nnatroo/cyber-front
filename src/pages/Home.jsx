import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Categories} from "../components/Categories.jsx";
import SaleBanner from "../components/SaleBanner.jsx";
import HeroSection from "../components/HeroSection.jsx";
import {Discount} from "../components/Discount.jsx";
import {NewArrivals} from "../components/NewArrivals.jsx";

const Home = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <Categories/>
            <NewArrivals/>
            <Discount/>
            <SaleBanner/>
            <Footer/>
        </>
    )
};

export default Home
