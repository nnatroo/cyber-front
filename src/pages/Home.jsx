import {Header} from "../components/Header.jsx";
import {Categories} from "../components/Categories.jsx";
import SaleBanner from "../components/SaleBanner.jsx";
import HeroSection from "../components/HeroSection.jsx";

const Home = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <Categories/>
            <SaleBanner />
        </>
    )
};

export default Home
