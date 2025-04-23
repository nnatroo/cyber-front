import { createRoot } from 'react-dom/client'
import './reset.scss'
import {BrowserRouter, Route, Routes} from "react-router";
import {Contact} from "./pages/Contact.jsx";
import {Address} from "./pages/Address.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/address" element={<Address />} />
      <Route path="/product" element={<Product/>} />
    </Routes>
  </BrowserRouter>
)
