import {Header} from "../components/Header.jsx";
import NewArrival from "../components/NewArrival.jsx"
import Discounts from "../components/Discounts.jsx"

const Home = () => {
  return (
    <>
     <Header />
        <br/><br/><br/>
     <NewArrival/>
        <br/><br/>
     <Discounts/>
    </>
  )
};

export default Home
