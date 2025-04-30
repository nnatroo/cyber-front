import { createRoot } from 'react-dom/client'
import './reset.scss'
import {BrowserRouter, Route, Routes} from "react-router";
import {Payment} from "./pages/Payment.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment" element={<Payment />} />
        </Routes>
    </BrowserRouter>
)
