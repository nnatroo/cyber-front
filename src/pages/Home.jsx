import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import {Categories} from "../components/Categories.jsx";
import SaleBanner from "../components/SaleBanner.jsx";
import HeroSection from "../components/HeroSection.jsx";
import {NewArrivalSection} from "../components/NewArrivalSection.jsx"
import {DiscountSection} from "../components/DiscountSection.jsx"
import {useState} from "react";

const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Header  onSearch={setSearchTerm}/>
            <HeroSection/>
            <Categories/>
            <NewArrivalSection/>
            <DiscountSection/>
            <SaleBanner />
            <Footer/>
        </>
    )
};

export default Home
