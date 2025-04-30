import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Categories} from "../components/Categories.jsx";
import SaleBanner from "../components/SaleBanner.jsx";
import HeroSection from "../components/HeroSection.jsx";

const Home = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <Categories/>
            <SaleBanner/>
            <Footer/>
        </>
    )
};

export default Home
