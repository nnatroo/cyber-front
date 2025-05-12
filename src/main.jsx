import {createRoot} from 'react-dom/client'
import './reset.scss'
import {BrowserRouter, Route, Routes} from "react-router";
import {Contact} from "./pages/Contact.jsx";
import {Address} from "./pages/Address.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Error from './pages/Error.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/address" element={<Address/>}/>
            <Route path="/smartphones" element={<Products/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
)
