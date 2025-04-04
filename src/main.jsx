import { createRoot } from 'react-dom/client'
import './reset.scss'
import {BrowserRouter, Route, Routes} from "react-router";
import {Contact} from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Shipping from "./pages/Shipping.jsx";
import Header from "./components/Header.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
    </Routes>
  </BrowserRouter>
)
